import { IonButton, IonModal, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonMenu, IonList, IonItem, IonButtons, IonMenuButton, IonTabs, IonTabBar, IonIcon, IonTabButton, IonBadge, IonLabel, IonItemGroup, IonItemDivider, IonInput, IonToggle, IonCheckbox, IonRange, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonNote, IonAvatar, IonListHeader, IonChip, IonGrid, IonRow, IonCol, IonImg, IonAlert, } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../../components/ExploreContainer';
import './Progress.css';
import { calendar, personCircle, map, informationCircle, personCircleOutline, calendarOutline, personOutline, locationOutline, locationSharp, calendarSharp, personSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Chart } from 'chart.js';

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
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
  }
}




const Progress: React.FC = () => {

  const [showJoin, setShowJoin] = useState(false);

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

          <ion-list-header color="light">Vertical Bar Chart</ion-list-header>
          <ion-card class="welcome-card">
            <ion-card-header>
              <ion-card-subtitle>Number of Viewers per season for</ion-card-subtitle>
              <ion-card-title>Game of Thrones</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <canvas #barChart></canvas>
            </ion-card-content>
          </ion-card>

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
    </IonPage>
  );
};

export default Progress;
