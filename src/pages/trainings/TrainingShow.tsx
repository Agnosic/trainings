import { IonButton, IonModal, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonMenu, IonList, IonItem, IonButtons, IonMenuButton, IonTabs, IonTabBar, IonIcon, IonTabButton, IonBadge, IonLabel, IonItemGroup, IonItemDivider, IonInput, IonToggle, IonCheckbox, IonRange, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonNote, IonAvatar, IonListHeader, IonChip, IonGrid, IonRow, IonCol, IonImg, IonAlert, IonRouterOutlet, IonTab, IonRouterLink, } from '@ionic/react';
import React, { useState } from 'react';
import TabContent from '../../components/TabContent';
import './Training.css';
import { calendar, personCircle, map, informationCircle, personCircleOutline, calendarOutline, personOutline, locationOutline, locationSharp, calendarSharp, personSharp, arrowUndoSharp, thumbsUpSharp, thumbsDownSharp, personAddSharp, shuffleSharp, notificationsSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';


const TrainingShow: React.FC = () => {

  const [showJoin, setShowJoin] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);

  var [showLol, setShowLol] = useState(false);

  var selectedTab = "participating";
  var buttonn;

  if (showLol) {
    buttonn = <IonButton size="large" color="tertiary" slot="end" onClick={() => setShowLol(false)}>Quit</IonButton>
  } else {
    buttonn = <IonButton size="large" color="tertiary" slot="end" onClick={() => { setShowJoin(true); setShowLol(true); }}>Join</IonButton>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class='header'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle color="dark">Training</IonTitle>
          <IonButton color="tertiary" routerLink={"/notifications"} fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={notificationsSharp} />
          </IonButton>
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

        <IonList lines="none" onClick={() => setShowParticipants(true)}>
          <IonListHeader>
            <h4>  24 / 40 participants</h4>
          </IonListHeader>


          <IonGrid>
            <IonRow>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="/assets/avatar.png" className="avatar" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="/assets/avatar.png" className="avatar" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="/assets/avatar.png" className="avatar" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="/assets/avatar.png" className="avatar" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="/assets/avatar.png" className="avatar" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="/assets/avatar.png" className="avatar" />
              </IonAvatar></IonCol>
              <IonCol size="1.5"><IonAvatar class="avatar">
                <img src="/assets/avatar.png" className="avatar" />
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

        <IonModal isOpen={showParticipants} cssClass='my-custom-class'>
          <TabContent selected={selectedTab} />
          <IonTabs>
            <IonRouterOutlet></IonRouterOutlet>
            {/*-- Tab bar --*/}
            <IonTabBar class="header" selectedTab="participating" slot="bottom">
              <IonTabButton onClick={() => setShowParticipants(false)}>
                <IonIcon icon={arrowUndoSharp} />
              </IonTabButton>

              <IonTabButton tab="participating" selected>
                <IonIcon icon={thumbsUpSharp} />
                <IonLabel>Participating</IonLabel>
              </IonTabButton>

              <IonTabButton tab="notGoing">
                <IonIcon icon={thumbsDownSharp} />
                <IonLabel>Not going</IonLabel>
              </IonTabButton>

              <IonTabButton tab="invited">
                <IonIcon icon={shuffleSharp} />
                <IonLabel>Invited</IonLabel>
              </IonTabButton>

              <IonTabButton tab="addParticipant">
                <IonIcon icon={personAddSharp} />
                <IonLabel>Invite</IonLabel>
              </IonTabButton>
            </IonTabBar><IonButton size="large" color="tertiary" slot="end" onClick={() => setShowJoin(true)}>Join</IonButton>

          </IonTabs>

        </IonModal>



      </IonContent>


      <IonFooter>
        <IonToolbar class="footer">
          <IonButton size="large" color="tertiary" slot="start">
            Chat
            </IonButton>
          {buttonn}



        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default TrainingShow;
