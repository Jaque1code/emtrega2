import React, { useContext} from 'react'
import Card from 'react-bootstrap/Card';
import { Button, Col,Row } from 'react-bootstrap';
import MiContexto from '../Context/MiContexto.jsx';
import { FaHeart} from 'react-icons/fa';




const Foto = ({fav, foto}) => {
  
   const {fotos, setFotos} = useContext(MiContexto);  
   
   const setFavorito = (id) => {
       const fotoConClick = fotos.findIndex((f) => f.id === id);
       fotos[fotoConClick].liked = !fotos[fotoConClick].liked;
       setFotos([...fotos]);
   }


  return (
  <Row> 
    <Col>
     <Card style={{ marginTop: '20px',height:'30vh',width: '19rem', backgroundColor:'transparent',
                    backgroundImage:`url(${foto.src.tiny})`, backgroundSize:'cover'}}>
       {!fav && <FaHeart onClick={() =>  
        setFavorito(foto.id)} style={{color:foto.liked?"red":"white", float: 'right'
                                       }}>
       </FaHeart>}
      <Card.Body>
      {foto.alt}
     </Card.Body>
     
    </Card>
    </Col>
  </Row>  
  )
}

export default Foto