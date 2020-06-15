import { IonButton, IonModal, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonMenu, IonList, IonItem, IonButtons, IonMenuButton, IonTabs, IonTabBar, IonIcon, IonTabButton, IonBadge, IonLabel, IonItemGroup, IonItemDivider, IonInput, IonToggle, IonCheckbox, IonRange, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonNote, IonAvatar, IonListHeader, IonChip, IonGrid, IonRow, IonCol, IonImg, IonAlert, } from '@ionic/react';


import React from 'react';
import {Bar} from 'react-chartjs-2';



const Trainings: React.FC = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Hours of activity',
        backgroundColor: 'rgba(255, 251, 80,1)',
        borderColor: 'rgba(255,200,00,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 251, 80,1)',
        hoverBorderColor: 'rgba(255,200,00,1)',
        data: [0, 10, 26, 15, 56, 55, 40]
      }
    ]
  };






    return (
 <IonPage>
          <IonHeader>
            <IonToolbar class='header'>
              <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons>
              <IonTitle color="dark">Trainings</IonTitle>
            </IonToolbar>
          </IonHeader>


          <IonContent>
                <Bar
                              data={data}
                              width={1000}
                              height={500}
                              options={{
                                maintainAspectRatio: true
                              }}
                            />
          </IonContent>
        </IonPage>
        );

};

export default Trainings;




{/*
import React from 'react'
//
import useChartConfig from 'hooks/useChartConfig'
import { Chart } from 'react-charts'
let sourceCode

const Trainings: React.FC = () => {
  const { data, randomizeData } = useChartConfig({
    series: 8,
    datums: 3,
    dataType: 'ordinal'
  })
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
        <Chart data={data} series={series} axes={axes} tooltip />

      <br />
    </>
  )
}
export default Trainings;
*/}

{/*
import React from 'react'
import useChartConfig from 'hooks/useChartConfig'
import Box from 'components/Box'
import { Chart } from 'react-charts'
import { IonContent} from '@ionic/react';

let sourceCode



const Progress: React.FC = () => {
  const { data, randomizeData } = useChartConfig({
    series: 10,
    dataType: 'ordinal'
  })
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { position: 'bottom', type: 'linear', stacked: true }
    ],
    []
  )
  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <IonContent>
        <Chart data={data} series={series} axes={axes} tooltip />
      </IonContent>
      <br />
    </>
  )
}
export default Progress;


{/*
import { IonButton, IonModal,  IonFooter, IonMenu, IonList, IonItem, IonMenuButton, IonTabs, IonTabBar, IonTabButton, IonBadge, IonLabel, IonItemGroup, IonItemDivider, IonInput, IonToggle, IonCheckbox, IonRange, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonNote, IonAvatar, IonListHeader, IonChip, IonGrid,  IonImg, IonAlert, } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../../components/ExploreContainer';
import './Progress.css';
import { calendar, personCircle, map, informationCircle, personCircleOutline, calendarOutline, personOutline, locationOutline, locationSharp, calendarSharp, personSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

import { Chart } from 'react-charts'


import { Component, ViewChild } from '@angular/core';

import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRow,
  IonCol,
  IonButtons,
  IonIcon
 } from '@ionic/react';

import { Bar } from 'react-chartjs-2';


const Progress: React.FC = () => {

  const [showJoin, setShowJoin] = useState(false);

    const data = React.useMemo(
        () => [
          {
            label: 'Series 1',
            data: [
              [0, 1],
              [1, 2],
              [2, 4],
              [3, 2],
              [4, 7],
            ],
          },
          {
            label: 'Series 2',
            data: [
              [0, 3],
              [1, 1],
              [2, 5],
              [3, 6],
              [4, 4],
            ],
          },
        ],
        []
      )

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class='header'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle color="dark">Trainings</IonTitle>
        </IonToolbar>
      </IonHeader>


        <IonContent>
                <canvas id="myChart" width="400" height="400"></canvas>
                <script>
                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
                </script>



                <IonCard color="light">
                  <IonCardHeader>
                    <IonCardTitle>Latest Situation per day</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonGrid>
                      <IonRow>
                        <IonCol size="12" size-sm>
                          Confirmed Cases: <strong>12</strong>
                        </IonCol>
                        <IonCol size="12" size-sm>
                          <Bar
                            data={data}
                            width={100}
                            height={100}
                            options={{
                              maintainAspectRatio: true
                            }}
                          />
                        </IonCol>
                      </IonRow>

                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonContent>
        {/*
      <IonContent>

          <ionListHeader color="light">Vertical Bar Chart</ionListHeader>
          <ionCard class="welcome-card">
            <ionCardHeader>
              <ionCardSubtitle>Number of Viewers per season for</ionCardSubtitle>
              <ionCardTitle>Game of Thrones</ionCardTitle>
            </ionCardHeader>
            <ionCardContent>
              <canvas #barChart></canvas>
            </ionCardContent>
          </ionCard>

        <IonList lines="none">
          <IonItem routerLink="/trainings/1">
            <IonLabel>Karate sparring</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Judo sparring</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Basketball begginers</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Golf extreme challenges</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Chess</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      A JSX comment
    </IonPage>
  );
};

export default Progress;
*/}
