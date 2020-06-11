import React from "react";
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import "./NotificationComponent.css";
import {
	SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";
import {thumbsUp, thumbsDown} from 'ionicons/icons';

const NotificationComponent: React.FC<{
    id: Number;
    author: String;
    shortMsg: String;
    onSwipe: (el: Number) => void;
}> = props => {
	return (
        <IonCard>
		<SwipeableListItem
			swipeLeft={{
				content: (
					<div className="full-width full-height ion-text-right green">
						<IonIcon icon={thumbsUp} className="thumb right" />
					</div>
				),
				action: () => props.onSwipe(props.id),
			}}
			swipeRight={{
				content: (
                    <div className="full-width full-height ion-text-left red">
					    <IonIcon icon={thumbsDown} className="thumb left" />
                    </div>
				),
				action: () => props.onSwipe(props.id),
			}}
			onSwipeProgress={(progress) =>
				console.info(`Swipe progress: ${progress}%`)
			}
		>
			
				<IonGrid>
					<IonRow>
						<IonCol size="2">
							<img src="/assets/avatar.png" className="avatar" />
						</IonCol>
						<IonCol className="author">
							<p className="name">{props.author}</p>
							<p className="text-secondary">an hour ago</p>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="content">{props.shortMsg}</IonCol>
					</IonRow>
				</IonGrid>
		</SwipeableListItem>
        </IonCard>
	);
};

export default NotificationComponent;
