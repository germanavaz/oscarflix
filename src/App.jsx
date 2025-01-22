import './Style.scss';
import trofeu from './assets/trofeu.png';
import banner from './assets/banner.svg';
import seta from './assets/seta.png'

export default function App() {

  const ganhadores24 = [
    {
      img:"https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg",
      altImg: "Poster do filme Oppenheimer",
      titulo: "Oppenheimer",
      premios: "Melhor filme, melhor direção, melhor ator, melhor ator coadjuvante, melhor trilha sonora, melhor fotografia, melhor montagem",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Primevideo",
      ondeAssistirLink: "https://www.primevideo.com/dp/amzn1.dv.gti.f60cf07a-7363-411e-9f4a-b93b568ef3d3?autoplay=0&ref_=atv_cf_strg_wb"
    }, 
    {
      img:"https://m.media-amazon.com/images/M/MV5BYWFiN2UwNjktZTY2OS00YzMzLWE3ODItOWI1MTAxNjk4ZDFmXkEyXkFqcGc@._V1_.jpg",
      altImg: "Poster do filme Pobres criaturas",
      titulo: "Pobres criaturas",
      premios: "Melhor atriz, melhor design de produção, melhor cabelo e maquiagem, melhor figurino",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Disney+",
      ondeAssistirLink: "https://www.disneyplus.com/pt-br/movies/poor-things/3mJ4M8d77WXI?distributionPartner=google"
    },
    {
      img:"https://m.media-amazon.com/images/S/pv-target-images/6bc67d8b0aa8804a74df93153a6cea31db87ccc4fd22c4b2e0ab560bea10bc9c.jpg",
      altImg: "Poster do filme Os rejeitados",
      titulo: "Os rejeitados",
      premios: "Melhor atriz coadjuvante",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Primevideo",
      ondeAssistirLink: "https://www.primevideo.com/-/pt/detail/Os-Rejeitados/0FGT8IC8F5NA57WU6FDTWXH8XU"
    },
    {
      img:"https://image.tmdb.org/t/p/original/woXYl0DJTx6TsfYWPkSfNHTsoOx.jpg",
      altImg: "Poster do filme Anatomia de uma queda",
      titulo: "Anatomia de uma queda",
      premios: "Melhor roteiro original",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Primevideo",
      ondeAssistirLink: "https://www.primevideo.com/dp/0IVRVINJJ5K58E3XH6GLUULD6N?ref_=dvm_pds_tit_br_sw_s_g_mkw_s2TNyp54CUE-dc&mrntrk=pcrid_714533017655_slid__pgrid_162640662616_pgeo_9100780_x__adext__ptid_kwd-2267604081024&_mkw_s2TNyp54CUE-dc&mrntrk=pcrid_714533017655_slid__pgrid_162640662616_pgeo_9100780_x__adext__ptid_kwd-2267604081024&gad_source=1&gclid=Cj0KCQiAhbi8BhDIARIsAJLOludOPblC1QMvztD-MizPjt60NsnM9UOvd1bYY51AzHbtiquAlFUKCzwaAjz8EALw_wcB&gclsrc=aw.ds"
    },
    {
      img:"https://m.media-amazon.com/images/M/MV5BMTdiMGRlMjctMDRmYi00NTQ4LTk4MWUtNDZjMzNjMGM2MDYwXkEyXkFqcGc@._V1_.jpg",
      altImg: "Poster do filme Ficção Americana",
      titulo: "Ficção Americana",
      premios: "Melhor roteiro adaptado",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Primevideo",
      ondeAssistirLink: "https://www.primevideo.com/-/pt/detail/Fic%C3%A7%C3%A3o-americana/0KEURR6UABMOJSC008Z54AUHYP"
    },
    {
      img:"https://br.web.img3.acsta.net/pictures/24/02/16/19/36/5568619.jpg",
      altImg: "Poster do filme O menino e a Garça",
      titulo: "O Menino e a Garça",
      premios: "Melhor animação",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Netflix",
      ondeAssistirLink: "https://www.netflix.com/watch/81725555?source=35"
    },
    {
      img:"https://supercinema.com.br/posters/2023/poster-zona-de-interesse-the-zone-of-interest-v11.jpg",
      altImg: "Poster do filme A Zona de Interesse",
      titulo: "A Zona de Interesse",
      premios: "Melhor filme internacional, melhor som",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Primevideo",
      ondeAssistirLink: "https://www.primevideo.com/-/pt/detail/ZONA-DE-INTERESSE/0S36K3WKAZVPV0NMZ8S4OGELLC"
    },
    {
      img:"https://m.media-amazon.com/images/M/MV5BZmY2ODlmNmQtODQ2MS00OTlkLWIyNTEtNzhhNTEyNjNjMjdjXkEyXkFqcGc@._V1_.jpg",
      altImg: "Poster do filme 20 dias em Mariupol",
      titulo: "20 dias em Mariupol",
      premios: "Melhor documentário",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Netflix",
      ondeAssistirLink: "https://www.netflix.com/title/81771289"
    },
    {
      img:"https://pbs.twimg.com/media/GIWjDrCXkAEa6u8.jpg",
      altImg: "Poster do filme A Incrível História de Henry Sugar",
      titulo: "A Incrível História de Henry Sugar",
      premios: "Melhor curta-metragem",
      descricao: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Netflix",
      ondeAssistirLink: "https://www.netflix.com/title/81388090"
    },
    {
      img:"https://upload.wikimedia.org/wikipedia/pt/8/82/Barbie_%282023%29.jpg",
      altImg: "Poster do filme Barbie",
      titulo: "Barbie",
      premios: "Melhor canção original",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam quasi deserunt cum cupiditate sint minus enim, quidem voluptatum, in numquam! Sunt quas dolore iusto!",
      ondeAssistir: "Max+",
      ondeAssistirLink: "https://www.max.com/br/pt/movies/barbie-com-libras/28c23817-bdad-44d6-8f47-96f0653cb13b?utm_source=universal_search"
    }
  ];

  return(
    <main>
      <section id="banner">
        <div className="banner">
          <h1>Oscarflix</h1>
          <p>Guia da onde achar os filmes indicados e ganhadores à premiação do Oscar.</p>
          <img src={seta} alt="Icone de seta para baixo" />
        </div>
        <img src={banner} alt="Ilustração com elementos de filme e cinema" />
      </section>
      <section id="vencedores24">
        <h2>Vencedores Oscar 2024</h2>
        <section className="cards">
          {ganhadores24.map((index, id) => (
            <article key={id} className='card'>
              <img src={index.img} alt={index.altImg} />
              <div className="informacoes">
                <div className="premios">
                  <img src={trofeu} alt="Ícone de um troféu." />
                  <h4>{index.premios}</h4>
                </div>
                <h3>{index.titulo}</h3>
                <p>{index.descricao}</p>
                <p>Onde assistir: <a href={index.ondeAssistirLink} target="_blank" rel="noopener noreferrer">{index.ondeAssistir}</a></p>
              </div>
            </article>
          )
          )}
        </section>
      </section>
    </main>
  )
}