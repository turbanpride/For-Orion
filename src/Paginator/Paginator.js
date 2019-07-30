import React,{Component} from 'react';

import './Paginator.css';
class Paginator extends Component
{
    constructor(props)
    {
        super(props);
        this.sendPageClickedVal = this.sendPageClickedVal.bind(this);
    }
    sendPageClickedVal(value)
    {
      this.props.setPageVal(value);
    }
    render()
    {
        var self = this;
        var paginationStructure = [],pages = 1,temp = "<>"
        if(this.props.totalResults %10 !== 0)
        {
            pages = this.props.totalResults/10 + 1;
        }
        else
        {
        pages = this.props.totalResults/10;
        }
        var i;
        for(i=1;i<=pages;i++)
        {
            paginationStructure.push(
                <div onClick={self.sendPageClickedVal.bind(this,i)} className={(self.props.pageSearched === i)?("selected-page paginator-div"):("paginator-div")} key={i}>{i}</div>
            );
        }
        console.log(this.props.responseData);
        return(
           (this.props.searchedVal.length>0 && this.props.responseData.Response !== "False")?(
            <div className="paginator-main">
            {temp[0]}
            {paginationStructure}
            {temp[1]}
            </div>
           ):(
               <div className="paginator-main">

               </div>
           )
        );
    }
}

export default Paginator;