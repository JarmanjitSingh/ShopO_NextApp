import connectToDB from "@/database";
import  UserModel  from "@/models/user";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const dynamic = "force-dynamic";

export const POST = async (req) => {
  await connectToDB();

  const { name, email, password } = await req.json();

  const { error } = schema.validate({ name, email, password });

  if (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const isUserAlreadyExist = await UserModel.findOne({ email });

    if (isUserAlreadyExist) {
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    } else {
      const hashedPassword = await hash(password, 12);

      const newCreatedUser = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });

      if (newCreatedUser) {
        return NextResponse.json({
          success: true,
          message: "Account registered successfully",
        });
      }
    }
  } catch (error) {
    console.log("error in user registration");
    return NextResponse.json({
      success: false,
      message: "Something went wrong! please try again later.",
    });
  }
};
