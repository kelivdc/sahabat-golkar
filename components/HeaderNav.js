import Link from 'next/link'
import React from 'react'

function HeaderNav() {
  return (
    <div className="absolute top-3 right-10 p-1 flex">            
      <Link href="/"><div className=" hover:bg-green-400 hover:rounded-md py-1 px-2">Home</div></Link>
      <Link href="/bantuan"><div className=" hover:bg-green-400 hover:rounded-md py-1 ml-4 px-2">Bantuan dan Layanan</div></Link>
    </div>
  )
}

export default HeaderNav