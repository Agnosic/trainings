import { IonButton, IonModal, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonMenu, IonList, IonItem, IonButtons, IonMenuButton, IonTabs, IonTabBar, IonIcon, IonTabButton, IonBadge, IonLabel, IonItemGroup, IonItemDivider, IonInput, IonToggle, IonCheckbox, IonRange, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonNote, IonAvatar, IonListHeader, IonChip, IonGrid, IonRow, IonCol, IonImg, IonAlert, } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../../components/ExploreContainer';
import './Training.css';
import { calendar, personCircle, map, informationCircle, personCircleOutline, calendarOutline, personOutline, locationOutline, locationSharp, calendarSharp, personSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

const TrainingShow: React.FC = () => {

  const [showJoin, setShowJoin] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class='header'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle color="dark">Training</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <IonList>
          <IonListHeader>
            <h1>Karate Sparring</h1>
          </IonListHeader>
          <IonItem>
            <IonIcon slot="start" icon={calendarSharp} />
            <IonLabel><h2>Saturday, 9 may</h2>
              <p>09:00 - 17:00 CEST</p></IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={locationSharp} />
            <IonLabel><h2>Shotokan Samuraj</h2>
              <p>Tadeusza Kościuszki 54, Kraków, Polska</p></IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" icon={personSharp} />
            <IonLabel><h2>host: Ryan</h2></IonLabel>
          </IonItem>
        </IonList>

        <IonList lines="none">
          <IonListHeader>
            <h4>  24 / 40 participants</h4>
          </IonListHeader>


          <IonGrid>
            <IonRow>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="https://www.gravatar.com/avatar/$12?d=monsterid&f=y" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="https://www.gravatar.com/avatar/$2?d=monsterid&f=y" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="https://www.gravatar.com/avatar/$3?d=monsterid&f=y" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="https://www.gravatar.com/avatar/$4?d=monsterid&f=y" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="https://www.gravatar.com/avatar/$5?d=monsterid&f=y" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="https://www.gravatar.com/avatar/$6?d=monsterid&f=y" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="https://www.gravatar.com/avatar/$7?d=monsterid&f=y" />
              </IonAvatar></IonCol>
            </IonRow>
          </IonGrid>
        </IonList>

        <IonList lines="none">
          <IonItem>
            <p>Come join us to test your karate moves!!!!!!</p>
          </IonItem>
          <IonItem>
            <p>You only need your sport suit</p>
          </IonItem>

          <IonItem>
            <IonImg src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" />
          </IonItem>
        </IonList>

        <IonAlert
          isOpen={showJoin}
          onDidDismiss={() => setShowJoin(false)}
          header={"You're in"}
          message={'Invite your friends to join'}
          buttons={['Invite your friends']}
        />

      </IonContent>


      <IonFooter>
        <IonToolbar class="footer">
          <IonButton size="large" color="tertiary" slot="start">
            Chat
            </IonButton>
          <IonButton size="large" color="tertiary" slot="end" onClick={() => setShowJoin(true)}>Join</IonButton>

        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default TrainingShow;
