import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from './styles';

interface ItemsProps {
    item:{
        title: string,
        price: number,
        id?: string,
        inCart?:number,
        idN?: number,
        url?: string,
        marca?: string,
        cc?: number
    } 
}

export const ItemCard = ({item}:ItemsProps) => {
  return (
    <Container>
    <Card style={{display:"grid", height: "400px"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.url}
          alt="green iguana"
        />
        <CardContent style={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:"center"}} >
        <Button size="large" sx={{fontWeight:"bold"}} color="success">
          Adicionar
        </Button>
        <Button size="large" sx={{fontWeight:"bold"}} color="success">
          Comprar
        </Button>
      </CardActions>
    </Card>
    </Container>

    
  )
}
