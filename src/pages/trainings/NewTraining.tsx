import { IonButton, IonModal, IonContent, IonHeader, IonSelectOption, IonSelect, IonDatetime, IonPage, IonTitle, IonToolbar, IonFooter, IonMenu, IonList, IonItem, IonButtons, IonMenuButton, IonTabs, IonTabBar, IonIcon, IonTabButton, IonBadge, IonLabel, IonItemGroup, IonItemDivider, IonInput, IonToggle, IonCheckbox, IonRange, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonNote, IonAvatar, IonListHeader, IonChip, IonGrid, IonRow, IonCol, IonImg, IonAlert, IonRouterOutlet, IonTab, IonRouterLink, } from '@ionic/react';
import React, { useState } from 'react';
import TabContent from '../../components/TabContent';
import './Training.css';
import { calendar, personCircle, map, informationCircle, personCircleOutline, calendarOutline, personOutline, locationOutline, locationSharp, calendarSharp, personSharp, arrowUndoSharp, thumbsUpSharp, thumbsDownSharp, personAddSharp, shuffleSharp, notificationsSharp } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';


const TrainingShow: React.FC = () => {

  const [checked, setChecked] = useState(false);
  const [trainingName, setTrainingName] = useState<string>();
  const [description, setDescription] = useState<string>();
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
          <IonTitle color="dark">New training</IonTitle>
          <IonButton color="tertiary" routerLink={"/notifications"} fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={notificationsSharp} />
          </IonButton>
        </IonToolbar>
      </IonHeader>


      <IonContent>
        <IonItem  ><IonToggle slot="end" checked /><IonLabel slot="end">Public</IonLabel></IonItem>
        <IonList>
          <IonItem>
                <IonLabel position="stacked">Training name</IonLabel>
               <IonInput value={trainingName}  onIonChange={e => setTrainingName(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
                    <IonLabel>Date</IonLabel>
                    <IonDatetime value="2020-02-19" placeholder="Select Date"></IonDatetime>
           </IonItem>
           <IonItem>
                     <IonLabel>Start</IonLabel>
                     <IonDatetime  display-format="h:mm A" picker-format="h:mm A" value="12:00" placeholder="Select Date"></IonDatetime>
                     <IonLabel>End</IonLabel>
                      <IonDatetime  display-format="h:mm A" picker-format="h:mm A" value="12:00" placeholder="Select Date"></IonDatetime>
           </IonItem>

        <IonItem>
          <IonLabel>Sport Type</IonLabel>
          <IonSelect interface="popover">
            <IonSelectOption value="Football">Football</IonSelectOption>
            <IonSelectOption value="Volleyball">Volleyball</IonSelectOption>
            <IonSelectOption value="Cycling">Cycling</IonSelectOption>
          </IonSelect>
        </IonItem>
           <IonItem>
                        <IonLabel position="stacked">Description</IonLabel>
                       <IonInput value={description}  onIonChange={e => setDescription(e.detail.value!)} clearInput></IonInput>
                  </IonItem>
        <IonItem>
             <IonLabel>Invite friends</IonLabel>
        <IonList>
        <IonItem>
           <IonLabel>Max</IonLabel>
           <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
        </IonItem>
         <IonItem>
                   <IonLabel>Simon</IonLabel>
                   <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
                </IonItem>
                   <IonItem>
                             <IonLabel>Logan</IonLabel>
                             <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
                          </IonItem>
         </IonList>
        </IonItem>

        <IonItem>
            <IonButton size="large" color="tertiary" slot="start">
            Accept
            </IonButton>
         </IonItem>
        </IonList>

      </IonContent>

    </IonPage>
  );
};

export default TrainingShow;
