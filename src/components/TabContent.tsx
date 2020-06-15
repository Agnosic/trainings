import React from 'react';
import { IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll } from '@ionic/react';

interface ContainerProps {
  selected: string;
}

const TabContent: React.FC<ContainerProps> = ({ selected }) => {
  return (
    <div>
      <IonList lines="none">
        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/avatar.png" className="avatar" />
          </IonAvatar>
          <IonLabel><h2>Max</h2>
            <p>Yesterday, 21:56</p></IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/avatar.png" className="avatar" />
          </IonAvatar>
          <IonLabel><h2>Viola</h2>
            <p>Yesterday, 20:56</p></IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/avatar.png" className="avatar" />
          </IonAvatar>
          <IonLabel><h2>Simon</h2>
            <p>2 may, 21:40</p></IonLabel>
        </IonItem>


        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/avatar.png" className="avatar" />
          </IonAvatar>
          <IonLabel><h2>Logan</h2>
            <p>1 may, 11:56</p></IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/avatar.png" className="avatar" />
          </IonAvatar>
          <IonLabel><h2>Rocky</h2>
            <p>28 march, 23:56</p></IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/avatar.png" className="avatar" />
          </IonAvatar>
          <IonLabel><h2>Sarah</h2>
            <p>12 march, 21:56</p></IonLabel>
        </IonItem>

        <IonItem>
          <IonAvatar slot="start">
            <img src="/assets/avatar.png" className="avatar" />
          </IonAvatar>
          <IonLabel><h2>Arthur</h2>
            <p>11 march, 21:54</p></IonLabel>
        </IonItem>




      </IonList>

    </div>

  );


};
export default TabContent;
