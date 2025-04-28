import Image from 'next/image'
import invitationImage from '../assets/img/davetiye.JPG'

export default function Davet() {
  return (
    <div className='bordered center'>
      <h1>İrem & Safa&apos;nın Düğünü</h1>
      <p>
        <strong>Tarih:</strong> 18 Mayıs Pazar, saat 19:00
      </p>

      <br />

      <p>
        <strong>Konum:</strong>{' '}
        <a href='https://maps.app.goo.gl/qdufjFsswXEji7si9'>
          Korupark Events Düğün Salonu, Kahramanmaraş
        </a>
      </p>

      <br />

      <Image src={invitationImage} alt='Düğün Davetiyesi' width={300} />
    </div>
  )
}
