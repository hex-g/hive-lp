import styled from 'styled-components'

export const Section = styled.section`
  width: 100vw;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5;

  @media (min-width: 992px){

  }
`

export const Title = styled.h1` 
  font-size: 100px;
  font-weight: 900;

  @media (min-width: 992px){
   font-size: 40px;
   font-weight: 900;
  }
`

export const SquareContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px){
    flex-direction: row;  
    color: white;
    justify-content: space-around;
    margin-bottom: 100px;
  }
`

export const Square = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px){
    background-color: #212121;
    border-radius: 15px;
    box-shadow: 3px 3px 10px rgba(51, 51, 51, 50%);
    margin: 5px;
    padding: 15px;
  }
`

export const Image = styled.img`
  width: 500px;
  height: 500px;
  background-image: url('https://i.kym-cdn.com/photos/images/newsfeed/000/887/044/67a.jpg');
  border-radius: 50%;

  @media (min-width: 992px){
    width: 200px;
    height: 200px;
  }
`

export const TitleSquare = styled.h2`
  font-size: 55px;
  font-weight: 900;
  margin-bottom: 50px;

  @media (min-width: 992px){
    font-size: 30px;
  }
`

export const Text = styled.p`
  font-size: 45px;
  text-align: center;
  margin: 0 0 150px 0;
  
  @media (min-width: 992px){
    width: 50%;
    font-size: 20px;
    margin: 0 0 50px 0;
  }
`