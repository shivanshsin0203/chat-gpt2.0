import {SunIcon,BoltIcon,ExclamationTriangleIcon} from '@heroicons/react/24/outline'
export default function Home() {
  return (
    <div className=" flex flex-col text-white items-center justify-center px-2 h-screen">
      <h1 className=" mb-20 text-5xl font-bold ">ChatGpt</h1>
      <div className=' flex space-x-2 text-center'>
        <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
            <SunIcon className=' h-8 w-8'/>
            <h2 >Example</h2>
          </div>
          <div className=' space-y-2'>
             <p className='infotech'> &quot;Explain Something to me&quot; </p>
             <p className='infotech'> &quot;What is difference between dog and cat&quot; </p>
             <p className='infotech'> &quot;What is color of sun&quot; </p>
          </div>
        </div>
        <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
            <BoltIcon className=' h-8 w-8'/>
            <h2 >Example</h2>
          </div>
          <div className=' space-y-2'>
             <p className='infotech'> &quot;Change the chatgpt model to use&quot; </p>
             <p className='infotech'> &quot;Message are sotred in firebase firestore&quot; </p>
             <p className='infotech'> &quot;Hot toast notification ChatGpt is thinking&quot; </p>
          </div>
        </div>
        <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className=' h-8 w-8'/>
            <h2 >Example</h2>
          </div>
          <div className=' space-y-2'>
             <p className='infotech'> &quot;May ocasinally generate icorrect information&quot; </p>
             <p className='infotech'> &quot;May ocasinally generate icorrect information which can be harmful&quot; </p>
             <p className='infotech'> &quot;Limeted knowledge of world after 2021&quot; </p>
          </div>
        </div>

      </div>
    </div>
  );
}