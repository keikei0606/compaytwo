import * as Axios from 'axios';
import * as React from 'react';
import ViewList from './ViewList';

interface ResultsType {
  data: FruitsType[]
}

interface FruitsType {
  id: number,
  name: string,
  value: number,
  createdAt: string,
  updatedAt: string,
}

interface State {
  data: FruitsType[]
}




class List extends React.Component<{},State> {
  constructor(props: Readonly<{}>){
    super(props);
    this.state = {
      data: []
    };
  }

  public componentDidMount() {
    Axios.default.get('http://localhost:3001/home')
    .then((results: ResultsType) => {
      console.log(results.data[0].id)
      this.setState(
        { 
         data: results.data
        })
    
    })
    .catch((data: any)=>{
      console.log(data)
    })
  }

  public render() {
    return (
      <React.Fragment>
        {this.state.data.map(fruit => {
        console.log(fruit.id);
        return(
         <ViewList key={fruit.id} id={fruit.name} value={fruit.value} />
        )
        
        })}
      </React.Fragment>
    )
  }
}

export default List;
