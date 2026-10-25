import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return(
    <div className='py-12 text-xl'>
        <SignIn />

    </div>
  ); 
}