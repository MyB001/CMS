import React from 'react'
import MemberTransaction from './MemberTransaction'

export default function Transactions() {
  return (
    <div className='space-y-4 col-span-2'>
        <h1 className='font-bold text-lg'>آخرین تراکنش ها</h1>
        <div className='grid grid-cols-4 p-2'>
            <h1 className='font-semibold'>مشتری</h1>
            <h1 className='font-semibold'>تاریخ</h1>
            <h1 className='font-semibold'>مبلغ</h1>
            <h1 className='font-semibold'>وضعیت</h1>
        </div>
        <div className='space-y-2'>
            <MemberTransaction customerName='امیر ایرانی' data='20 فروردین 1400' price='340,000,000' status='نقد پرداخت شد'/>
            <MemberTransaction customerName='احسان بیلمی' data='31 خرداد 1350' price='40,000,000' status='چکی پرداخت شد'/>
            <MemberTransaction customerName='ایران قاآنی' data='02 مهر 1378' price='12,000,000' status='پرداخت نشد'/>
            <MemberTransaction customerName='خاتون بلوچی' data='12 بهمن 1403' price='400,000' status='چکی پرداخت شد'/>
            <MemberTransaction customerName='محمد حکیمی' data='10 خرداد 1393' price='4,100,000' status='پرداخت نشد'/>
            <MemberTransaction customerName='زینت فدوی' data='05 دی 1378' price='5,700,000' status='نقد پرداخت شد'/>
            <MemberTransaction customerName='مهدی اسماعیلی' data='06 اسفند 1399' price='9,500,000' status='نقد پرداخت شد'/>
            <MemberTransaction customerName='مهشید داوودی' data='25 اردیبهشت 1401' price='400,000,000' status='چکی پرداخت شد'/>
        </div>
    </div>
  )
}
