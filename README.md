# server component in side a client component is becomes a client component ?

1. yes, if we import the server component in the client component then it will become the client component BUT.
2. However, if we pass server component as a childern or as a prop without import statement then it will not become a client component it remains the server component.

For example: we are using the use client in our main layout because of NextUI 
