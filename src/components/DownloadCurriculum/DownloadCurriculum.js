import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import pdf from '../../assets/curriculum/curriculum.pdf'


import './DownloadCurriculum.scss'

export default function DownloadCurriculum() {


    return (
        <Container>
            <div className="download">
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                <a href={pdf} download="Curriculum_David_Berdiell.pdf" target="_blank">Descargar Currículum</a>
            </div>
        </Container>
    )
}