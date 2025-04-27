export default function Davet() {
  return (
    <html lang="tr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>İrem & Safa'nın Düğünü</title>
        <style>{`
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fdf6f0;
            color: #333;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
          }

          h1 {
            font-size: 2em;
            margin-bottom: 10px;
            color: #9c5b5b;
          }

          p {
            font-size: 1.2em;
            margin: 10px 0;
          }

          .map-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 oranı */
            margin-top: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .map-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }

          @media (min-width: 600px) {
            h1 {
              font-size: 2.5em;
            }

            p {
              font-size: 1.5em;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>İrem & Safa'nın Düğünü</h1>
          <p><strong>Tarih:</strong> 18 Mayıs Pazar, 19:00</p>
          <p><strong>Yer:</strong> Korupark Events Düğün Salonu, Kahramanmaraş</p>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.090916465643!2d36.93409407547223!3d37.57310867204926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152dde59e314ddab%3A0x4c5c6b6e8f2431a3!2sKorupark%20Events%20D%C3%BC%C4%9F%C3%BCn%20Salonu!5e0!3m2!1str!2str!4v1714244271917!5m2!1str!2str"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </body>
    </html>
  );
}