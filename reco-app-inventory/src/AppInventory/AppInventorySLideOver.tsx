import { Text } from "../Components/Text";

export function AppInventorySlideOver({app}:{app:any}) {
    return (
     
     <div>
        <Text>App overview</Text>
        <AppOverview appId={app.appId}/>
        <AppUsers appId={app.appId} />
     </div>
    );
  }

  function AppOverview({appId}: {appId:string}){
    return (<div>

    </div>);
  }

  function AppUsers({appId}: {appId: string}){
    return (<div>
        
    </div>);
  }
  
 