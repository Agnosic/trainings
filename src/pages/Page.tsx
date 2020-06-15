import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonItem, IonRouterLink, IonButton } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { notificationsSharp } from 'ionicons/icons';

const Page: React.FC = () => {

	const { name } = useParams<{ name: string; }>();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar class="header">
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle color="dark">{name}</IonTitle>
					<IonButton color="tertiary" routerLink={"/notifications"} fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={notificationsSharp} />
          </IonButton>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name={name} />
			</IonContent>
		</IonPage>
	);
};

export default Page;
