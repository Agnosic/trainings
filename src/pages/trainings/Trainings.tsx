import { IonButton, IonModal, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonMenu, IonList, IonItem, IonButtons, IonMenuButton, IonTabs, IonTabBar, IonIcon, IonTabButton, IonBadge, IonLabel, IonItemGroup, IonItemDivider, IonInput, IonToggle, IonCheckbox, IonRange, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonNote, IonAvatar, IonListHeader, IonChip, IonGrid, IonRow, IonCol, IonImg, IonAlert, IonRouterLink, } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../../components/ExploreContainer';
import './Training.css';
import { calendar, personCircle, map, informationCircle, personCircleOutline, calendarOutline, personOutline, locationOutline, locationSharp, calendarSharp, personSharp, notificationsSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

const Trainings: React.FC = () => {

  const [showJoin, setShowJoin] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class='header'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle color="dark">Trainings</IonTitle>
          <IonRouterLink routerLink={"/notifications"} slot="end">
            <IonIcon icon={notificationsSharp} className="ion-padding" />
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>


      <IonContent>
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

export default Trainings;
