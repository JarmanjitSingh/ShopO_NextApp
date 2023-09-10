import connectToDB from '@/database'
import Image from 'next/image'

export default function Home() {
  connectToDB()
  return (
    <main className='text-red-500'>
     Hello shopO   
    </main>
  )
}
