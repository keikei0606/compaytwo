import * as React from 'react';

interface Props{
    id: string,
    value: number,
}

interface State {
    data: string,
}

class ViewList extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = {
          data: ''
        };
    }

    public render() {
        return(
            
        <span>{this.props.id}:{this.props.value}円 </span>
        )
    }

}

export default ViewList