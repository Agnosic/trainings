
import React, { ReactNode, ReactElement, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonCard, IonCardContent } from '@ionic/react';
import "./Notifications.css";
import {
	SwipeableList,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import NotificationComponent from '../../components/NotificationComponent';


var initNotifications: Array<any> = [
	{
		id: 1,
		author: "Jan Kowalski",
		shortMsg: "Someone invites you to an event!",
	},
	{
		id: 2,
		author: "Jan Kowalski",
		shortMsg: "Someone invites you to an event!",
	},
	{
		id: 3,
		author: "Jan Kowalski",
		shortMsg: "Someone invites you to an event!",
	},
];

const Notifications: React.FC = () => {

  var [notifications, setNotifications] = useState<Array<any>>(initNotifications);  
  
  const dismiss = (id: Number) => {
    initNotifications = initNotifications.filter(n => n.id != id);
    console.log("dismissed id: " + id);
    setNotifications(initNotifications);
  };

  return (
		<IonPage>
			<IonHeader>
				<IonToolbar class="header">
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle color="dark">Notifications</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding">
				<h1>Notifications</h1>
				<SwipeableList>
            { notifications?.map(n => {
                return (
                  <NotificationComponent id={n.id} key={n.id} author={n.author} shortMsg={n.shortMsg} onSwipe={dismiss} />
                )
              })
            }
				</SwipeableList>
			</IonContent>
		</IonPage>
	);
};

export default Notifications;
