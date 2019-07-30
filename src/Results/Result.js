import React,{Component} from 'react';
import './Result.css';

import {Row,Col} from 'react-bootstrap';
import NoImage from './../Images/noImage.png'
class Result extends Component
{
    
    render()
    {
        var self = this;
        var searchedValLen = this.props.searchedVal.length;
        var i=0,count=0,data = this.props.data.Search,resultStructure = [];
        if(data !== undefined)
        {
            
            var dataLen = Object.keys(data).length;
            
            var tempArr = [];
            var searchedValues = 0;
            for(i in data)
            {
                
                if(searchedValLen > 0)
                {

                    count++;
                    if((data[i].Title.toUpperCase()).includes(self.props.searchedVal.toUpperCase()))
                    {
                        searchedValues++;       
                        tempArr.push(
                            <Col sm={3}key={i} className="image-col">
                               {
                            (data[i].Poster === "N/A")?(
                                <img src={NoImage} alt={data[i].Title}></img>
                            ):(
                                <img src={data[i].Poster} alt={data[i].Title}></img>
                            )
                        }
                                <div className="image-details">
                                <p><b>Name: {data[i].Title}</b></p>
                                <p><b>Year: {data[i].Year}</b></p>
                                <p><b>imdbID: {data[i].imdbID}</b></p>
                                <p><b>Type: {data[i].Type}</b></p>
                                </div> 
                            </Col>
                        );
                    }
                }
                
                else
                {
                    count++;
                    tempArr.push(
                        <Col sm={3}key={i} className="image-col">
                        {
                            (data[i].Poster === "N/A")?(
                                <img src={NoImage} alt={data[i].Title}></img>
                            ):(
                                <img src={data[i].Poster} alt={data[i].Title}></img>
                            )
                        }
                            {/* <img src={data[i].Poster} alt={data[i].Title}></img> */}
                            <div className="image-details">
                            <p><b>Name: {data[i].Title}</b></p>
                            <p><b>Year: {data[i].Year}</b></p>
                            <p><b>imdbID: {data[i].imdbID}</b></p>
                            <p><b>Type: {data[i].Type}</b></p>
                            </div> 
                        </Col>
                    );
                }
                
            }
            if(searchedValues === 0 && searchedValLen >0)
            {
                resultStructure.push(
                    <Row key ={i} className="show-grid noResultRow">
                        <p className="noResultParagraph">No Result Found! Please Try Other Name</p>
                    </Row>
                );
                // tempArr= [];
            }
            else
            {

                resultStructure.push(
                    <Row key ={i} className="show-grid">
                        {tempArr}
                    </Row>
                );
                tempArr= [];
                // if((count%4 === 0) || (i > dataLen - dataLen%4))
                // {
                //     resultStructure.push(
                //         <Row key ={i} className="show-grid">
                //             {tempArr}
                //         </Row>
                //     );
                //     tempArr= [];
                // }
                // if(i < dataLen - dataLen%4)
                // {
                //     console.log("Entered...");
                //     resultStructure.push(
                //         <Row key ={i} className="show-grid">
                //             {tempArr}
                //         </Row>
                //     );
                //     tempArr= [];
                // }

            }
            
        }
        else
        {
            if(searchedValLen >0)
        {
            resultStructure.push(
                <Row key ={i} className="show-grid noResultRow">
                    <p className="noResultParagraph">No Result Found! Please Try Other Name</p>
                </Row>
            );
        }
        }
        
        return(
            <div className="result-holder">
            {resultStructure}
            </div>
        );
    }
}

export default Result;