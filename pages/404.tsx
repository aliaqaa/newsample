   import React from 'react';
   import Link from 'next/link';

   const Custom404: React.FC = () => {
     return (
       <div className='my-40'>
        
         <Link href="/" className=' p-10 bg-primaryCyan text-white rounded-full'>
          404 NOT FOUND
         </Link>
       </div>
     );
   };

   export default Custom404;