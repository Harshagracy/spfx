import * as React from 'react';
import styles from './Iframe.module.scss';
import { IIframeProps } from './IIframeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IFrameDialog } from "@pnp/spfx-controls-react/lib/IFrameDialog";
import {
  DialogType
} from 'office-ui-fabric-react';
interface IIframeStates {
  isDlgOpen: boolean;
}
export default class Iframe extends React.Component<IIframeProps, IIframeStates> {
  constructor(props: IIframeProps, state: IIframeStates) {
    super(props);
    this.state = {
      isDlgOpen: false
    };
  }
  /*
  renders the breadcrumb based on selected category and sub-category 
  */
  public componentWillReceiveProps() {
    this.setState({
      isDlgOpen: true
    });
  }
  private _onDlgDismiss(): void {
    this.setState({
      isDlgOpen: false
    });
  }

  private _onDlgLoaded(): void {
    console.log('dlg is loaded');
  }
  private opendialog(){
    this.setState({
      isDlgOpen: true
    });
  }
  public render(): React.ReactElement<IIframeProps> {
    return (
      <div className={styles.iframe}>
        <span className={styles.button} onClick={()=>this.opendialog()}>open iframe</span>
        <IFrameDialog
          url={"./workbench.html"}
          iframeOnLoad={this._onDlgLoaded.bind(this)}
          hidden={!this.state.isDlgOpen}
          onDismiss={this._onDlgDismiss.bind(this)}
          modalProps={{
            isBlocking: true
          }}
          dialogContentProps={{
            type: DialogType.close,
            showCloseButton: true
          }}
          width={'700px'}
          height={'315px'} />
      </div>
    );
  }
}
