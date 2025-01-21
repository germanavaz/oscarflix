import './Style.scss';
import trofeu from './assets/trofeu.png';

export default function App() {

  const ganhadores24 = [
    {
      img:"https://upload.wikimedia.org/wikipedia/pt/8/82/Barbie_%282023%29.jpg",
      altImg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt!",
      titulo: "Barbie",
      premios: "Melhor trilha sonora",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Netflix",
      ondeAssistirLink: "https://www.netflix.com"
    }
  ];

  return(
  <>
  <h1>Oscarflix</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illum?</p>

  
  <section id='vencedores24'>
  <h2>Vencedores Oscar 2024</h2>
    <div className='card'>
    {ganhadores24.map((index, id) => (
      <article key={id}>
        <img src={index.img} alt={index.altImg} />
        <div className='premios'>
          <img src={trofeu} alt="Icone de um troféu." />
          <h4>{index.premios}</h4>
        </div>
        <h3>{index.titulo}</h3>
        <p>{index.descricao}</p>
        <p>Onde assistir: <a href={index.ondeAssistirLink} target="_blank" rel="noopener noreferrer">{index.ondeAssistir}</a></p>
      
      </article>
    ))}
    </div>

  </section>

  </>)
}