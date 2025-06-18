import React from 'react'

import './App.css'
import Header from './comman/Header'
import Footer from './comman/Footer'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {


  return (
    <>
      <Header />
      <h1 className='bg-[red]'> hello class </h1>

      <div style={{ width: "500px", height: "100px", backgroundColor: "green" }} > hello </div>


      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 540 }}
          image="https://i.pinimg.com/736x/a8/12/9b/a8129b5dc5a04f2b16bdf7c44cf36a9e.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

         <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 540 }}
          image="https://i.pinimg.com/736x/a8/12/9b/a8129b5dc5a04f2b16bdf7c44cf36a9e.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>


         <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 540 }}
          image="https://i.pinimg.com/736x/a8/12/9b/a8129b5dc5a04f2b16bdf7c44cf36a9e.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>


         <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 540 }}
          image="https://i.pinimg.com/736x/a8/12/9b/a8129b5dc5a04f2b16bdf7c44cf36a9e.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>



        <p className='myPtag'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et tempora assumenda illo reprehenderit, accusamus accusantium blanditiis impedit, quasi maxime voluptatibus rerum dicta quidem excepturi, dolores aliquid deserunt quas reiciendis cupiditate.
        </p>
      <Footer />
    </>
  )
}

export default App
