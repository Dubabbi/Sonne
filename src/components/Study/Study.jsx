// Study.jsx

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as S from './StudyStyle'
export default function Study() {

  return (
    <div style={{backgroundColor: '#000', margin: '0'}}>
    <S.CardWrapper>
    <Card style={{width: '85%', fontSize: '1.3vw', backgroundColor: '#1f1f2e', color: '#fff', marginTop: '7%'}}> 
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" style={{marginTop: '2%', marginBottom: '1%'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </S.CardWrapper>
    <S.CardWrapper>
    <Card style={{width: '85%', fontSize: '1.3vw', backgroundColor: '#1f1f2e', color: '#fff'}}> 
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" style={{marginTop: '2%', marginBottom: '2%'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </S.CardWrapper>
    <S.CardWrapper>
    <Card style={{width: '85%', fontSize: '1.3vw', backgroundColor: '#1f1f2e', color: '#fff'}}> 
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" style={{marginTop: '2%', marginBottom: '2%'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </S.CardWrapper>
    <S.CardWrapper>
    <Card style={{width: '85%', fontSize: '1.3vw', backgroundColor: '#1f1f2e', color: '#fff'}}> 
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" style={{marginTop: '2%', marginBottom: '2%'}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </S.CardWrapper>
    
    <div style={{height: '10vh'}}>
    </div>
    </div>
  );
}
