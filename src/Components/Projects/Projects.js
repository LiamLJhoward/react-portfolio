import React from "react";
import './Projects.css';
import Card from 'react-bootstrap/Card';

export default function Projects() {
    return (
        <>
        <div className="card-container">
            <Card className="bg-dark text-white">
              <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title className="card-title">Money Planner</Card.Title>
                <Card.Text className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white">
            <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="card-title">Movie Helper</Card.Title>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural lead-in
                to additional content.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white">
            <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="card-title">Work Day Scheduler</Card.Title>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural lead-in
                to additional content.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </div>
          </>
          );
        }    






