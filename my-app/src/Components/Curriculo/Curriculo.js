import InformacoesPessoais from '../InformacoesPessoais/InformacoesPessoais';
import CardInfo from '../CardInfo/CardInfo';

function Curriculo() {

    const formacoes = [
        {
            titulo: "Técnologo em TIC",
            periodo: "(02/2020 – Atual)",
            instituicao: "Faertej - Petrópolis"
        },
        {
            titulo: "Residencia de Software Serratec",
            periodo: "(03/2023 – Atual)",
            instituicao: "SerraTec"
        }
    ];
    const experiencias = [
        {
            titulo: "Estágio em Desenvolvimento",
            periodo: "(01/10/2022 – 01/01/2023)",
            instituicao: "Exati"
        },
        {
            titulo: "Instrutor de Programação",
            periodo: "(01/10/2021 – 01/10/2022)",
            instituicao: "CodeBuddy - Petrópolis"
        },
        {
            titulo: "Professor de Informática",
            periodo: "(01/05/2022 – 01/10/2022)",
            instituicao: "ONG Sal para Terra"
        }
    ];

    return (
        <div>
            <InformacoesPessoais />
            <CardInfo titulo="📓Formação"  infos={formacoes} />
            <CardInfo id="experiencias" titulo="🔨Experiência Profissional" infos={experiencias}/> 
        </div>
    )
}

export default Curriculo;