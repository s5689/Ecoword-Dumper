const wordIcon =
  '<svg style="filter: invert(1); height: 18px; display: inline; margin-left: 0.3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3L273 257.1c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"/></svg>';

const fileNames = [
  'bartolo chancletón',
  'crispín mondongo',
  'telesforo pegajoso',
  'don ciriaco cacahuetín',
  'margarito trombón',
  'juanelo pegotillo',
  'herminia fideos',
  'prócoro zancadilla',
  'estupidina plasplas',
  'clodomiro saltaperros',
  'filemón ñequeñeque',
  'petronila burbujea',
  'apolonio matasapos',
  'tarsicia bocadillo',
  'gorgonio sobaquín',
  'bonifacia tiritona',
  'marulo pataclín',
  'anacleto rechinido',
  'jacaranda chisguete',
  'rigoberta cuchufleta',
  'pelagio patatús',
  'obdulia remolino',
  'leovigildo ñangazo',
  'berenjena tostadita',
  'zacarías pompín',
  'nicanora papanatas',
  'fulgencio traca-traca',
  'alpidio coscorroncio',
  'saturnina gruñiflor',
  'eusebio tamborcito',
  'torcuata pegamocos',
  'doroteo chipotazo',
  'isolina rascatripas',
  'cesáreo menudillo',
  'pancracia estropajo',
  'genaro salpicón',
  'candelaria cuchicuchi',
  'obdulio tragacocos',
  'eleuteria frijolín',
  'melquíades patacuajo',
  'sinforosa gargajita',
  'teófilo culebrón',
  'bernarda trompichón',
  'ulpiano surtidito',
  'casimira tronchatoro',
  'clotildo babasucia',
  'basilia piojosilla',
  'fermín tirabuzón',
  'lupercia muevelengua',
  'tránsito escupitajo',
  'mesa sentada',
  'luna apagada',
  'gato volador',
  'agua seca',
  'piedra hablante',
  'flor comiendo',
  'sombrero bailando',
  'viento quieto',
  'cielo en la tierra',
  'árbol invisible',
  'río congelado',
  'zapato de plátano',
  'fuego helado',
  'ratón gigante',
  'sol que duerme',
  'pelota sin rebote',
  'luna de barro',
  'lámpara nadadora',
  'relojes al revés',
  'silla caminante',
  'nube de hierro',
  'pájaro de acero',
  'tren flotante',
  'luz oscura',
  'coche sin ruedas',
  'ratón cantando',
  'flor corriendo',
  'coche de papel',
  'pelota rota',
  'luna saltarina',
  'gato bailando',
  'agua espesa',
  'cielo cuadrado',
  'sombrero con ojos',
  'camisa de sol',
  'río de fuego',
  'zapato volador',
  'luna ruidosa',
  'ventilador de hielo',
  'vaca cantando',
  'sol de carbón',
  'luz pesada',
  'roca que respira',
  'flor que grita',
  'silla de viento',
  'piedra saltarina',
  'sombrero en el suelo',
  'luna rebotando',
  'gato de cartón',
  'pelota flotante',
  'zapato nadador',
  'puerta que canta',
  'cielo de metal',
  'pluma pesada',
  'relojes sin horas',
  'ratón con corbata',
  'flor voladora',
  'gato sin cola',
  'viento congelado',
  'pelota que duerme',
  'sombrero encendido',
  'agua en polvo',
  'guitarra muda',
  'luz que resbala',
  'piedra flotante',
  'luna que corre',
  'tren a la luna',
  'zapato sin suela',
  'sombrero de fuego',
  'gato sin orejas',
  'pelota viajera',
  'flor bajo el agua',
  'sol congelado',
  'roca cantando',
  'viento con alas',
  'luna que rebota',
  'cielo de cartón',
  'sombrero sin cabeza',
  'agua con sabor a tierra',
  'piedra alada',
  'gato con alas',
  'luna en el bolsillo',
  'ratón de cristal',
  'flor con piernas',
  'sombrero en la luna',
  'zapato volador',
  'pelota que camina',
  'ratón de fuego',
  'sol frío',
  'luna en llamas',
  'agua que brilla',
  'tren saltarín',
  'relojes que bailan',
  'sombrero sin cuerpo',
  'piedra que habla',
  'flor de metal',
  'viento que flota',
  'zapato de nube',
  'cielo en el suelo',
  'gato que nada',
  'luna sin estrellas',
  'agua de fuego',
  'relojes de madera',
  'piedra que rueda',
  'flor que susurra',
  'vaca que vuela',
  'tren invisible',
  'zapato que salta',
  'ratón que nada',
  'luna que canta',
  'flor de acero',
  'sombrero de nieve',
  'gato saltarín',
  'agua que se ríe',
  'piedra que mira',
  'relojes sin manecillas',
  'flor que baila',
  'zapato de fuego',
  'gato bailarín',
  'ratón invisible',
  'tren que vuela',
  'cielo que respira',
  'sombrero flotante',
  'pelota que grita',
  'flor en el aire',
  'luna de chocolate',
  'ratón que reposa',
  'piedra de algodón',
  'agua que canta',
  'sombrero en el viento',
  'pelota parlante',
  'zapato de aire',
  'ratón saltando',
  'luna que se esconde',
  'flor que huele a sol',
  'tren sin ruedas',
  'cielo que llueve',
  'relojes rotos',
  'ratón que ríe',
  'gato en el viento',
  'flor de lluvia',
  'agua que se esconde',
  'piedra con ojos',
  'sombrero que vuela',
  'pelota sin vida',
  'gato sin sombra',
  'relojes que duermen',
  'flor nadadora',
  'tren que arde',
  'zapato flotante',
  'piedra que canta',
  'gato sin dientes',
  'luna que brilla',
  'agua flotante',
  'relojes en el aire',
  'flor que duerme',
  'pelota sin alma',
  'cielo que canta',
  'viento que ríe',
  'ratón que habla',
  'sombrero de luna',
  'luna sobre el agua',
  'gato que observa',
  'relojes congelados',
  'pelota bajo el sol',
  'flor de lluvia',
  'agua sobre el fuego',
  'piedra congelada',
  'tren que nada',
  'zapato sin suela',
  'ratón con gafas',
  'sombrero con alas',
  'flor que canta',
  'pelota que salta',
  'luna sin luz',
  'agua que vuela',
  'ratón que corre',
  'tren invisible',
  'zapato sin ataduras',
  'piedra en el aire',
  'gato que flota',
  'luna sin fin',
  'flor con alas',
  'pelota saltarina',
  'viento sin dirección',
  'relojes sin tiempo',
  'gato sin sombras',
  'sombrero flotante',
  'flor en el viento',
  'agua que resbala',
  'piedra luminosa',
  'luna de cristal',
  'zapato sin pies',
  'ratón que mira',
  'flor de fuego',
  'pelota sin aire',
  'relojes que flotan',
  'tren con alas',
  'gato que vuela',
  'luna sin sombra',
  'agua sin fin',
];

if (location.origin === 'https://zamcast.codesud.com') {
  // Generar boton de Word en la pagina
  const wordButton = document.createElement('button');
  wordButton.id = 'wordButton';
  wordButton.type = 'button';
  wordButton.classList.add('btn');
  wordButton.classList.add('bg-blue-800');
  wordButton.innerHTML = `Crear Word ${wordIcon}`;
  wordButton.setAttribute('style', 'margin-right: 0.5rem;');
  wordButton.addEventListener('click', generateWord);

  try {
    document.querySelector('#btnRefresh').insertAdjacentElement('beforebegin', wordButton);
  } catch (error) {}
}

function generateWord() {
  // Celdas a buscar con nombres a reemplazar
  const toExtract = {
    pat_name: 'Nombre',
    pat_id: 'RUT',
    age: 'Edad',
    anamnesis: 'Anamnesis',
    study_desc: 'Estudio Realizado',
    prioridad: 'Prioridad',
  };

  const table = document.querySelector('#crud-datatable');
  const rows = table.querySelectorAll('tbody tr');
  const data = [];

  // Recorrer todas las filas
  rows.forEach((value) => {
    const currentRowData = {};

    // Recorrer las celdas
    value.childNodes.forEach((valua) => {
      const currentClass = valua.className.replace(' ', '');

      // Comprobar de que la celda actual corresponde a la lista de celdas a buscar
      if (currentClass in toExtract) {
        let toInsert = '';

        if (currentClass === 'anamnesis') {
          toInsert = valua.childNodes[0].getAttribute('data-content');
        } else if (currentClass === 'prioridad') {
          toInsert = valua.querySelector('select').value;
        } else {
          toInsert = valua.innerHTML;
        }

        currentRowData[toExtract[currentClass]] = toInsert;
      }
    });

    data.push(currentRowData);
  });

  // Generar tabla para exportar
  const exportTable = document.createElement('table');
  const priorityRow = 'background-color: #ffff00;';
  const normalRow = 'background-color: #c6d9f1;';
  const cellStyle = 'border: 1px solid black;';
  const text = { head: '', body: '' };

  // Head
  text.head = `
    <th style="${cellStyle} width: 25%;">Nombre - RUT</th>
    <th style="${cellStyle} width: 10%;">Edad</th>
    <th style="${cellStyle} width: 15%;">Examen</th>
    <th style="${cellStyle} width: 60%;">Hallazgos</th>
  `;

  // Body
  data.forEach((value) => {
    text.body += `
      <tr style="${value.Prioridad === '' ? normalRow : priorityRow}">
        <td style="${cellStyle}">${value.Nombre} ${value.RUT}</td>
        <td style="${cellStyle} text-align: center;">${value.Edad}</td>
        <td style="${cellStyle} text-align: center;">${value['Estudio Realizado']}</td>
        <td style="${cellStyle}">${value.Anamnesis}</td>
      </tr>
    `;
  });

  // Unir
  exportTable.innerHTML = `
    <thead style="text-align: center; background-color: darkslategray; color: white">
      <tr>
        ${text.head}
      </tr>
    </thead>

    <tbody>
      ${text.body}
    </tbody>
  `;

  // Estilos de la tabla
  exportTable.setAttribute('style', 'border-collapse: collapse;');

  // Generar Documento
  const link = document.createElement('a');
  const blob = htmlDocx.asBlob(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exported Ecoword</title>
    </head>
    <body>
      ${exportTable.outerHTML}
    </body>
    </html>
  `);

  link.href = URL.createObjectURL(blob);
  link.download = fileNames[Math.floor(Math.random() * 250)];
  link.click();
}
