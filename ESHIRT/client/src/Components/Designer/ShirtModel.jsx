import React,{useEffect, useState} from 'react';
import ModelCSS from './ShirtModel.module.css';
import img from '../../assets/manga_larga.png';
import img2 from '../../assets/img/random_remera_front.png';
import img3 from '../../assets/img/women_Vshirt.png';
import swal from 'sweetalert';

function ShirtModel(props) {

    /* REDUX, LAS IMAGENES VIENEN DEL BACK ¿? */

    const [data, setData] = useState(null);

   useEffect(()=> {

    if(data!== null){
                    swal({
                        title: data,
                        icon: 'success',
                        text: '您选择了'+ data + '下一步选择尺码',
                        buttons: ['换个款式', '选择尺码']
                    }).then((allow)=> {
                        if(data!== null && allow) {
                            return props.setPhase({
                                modelSelected: {data, status: true}, 
                                sizeSelected: {...props.phase.sizeSelected, status:false}})
                       }
                    })
                }
   }, [data])

    return (
        <div className={ModelCSS.containerOfDesign}>
            <div className={ModelCSS.title}>
                <h2>{!data && !props.phase.modelSelected.data ? '选择款式' : !data ? props.phase.modelSelected.data : data}</h2>
                {/* <span>{data && <button className={ModelCSS.GoAhead}onClick={()=>{
                    if(data!== null) {
                        return props.setPhase({
                            modelSelected: {data, status: true}, 
                            sizeSelected: {...props.phase.sizeSelected, status:false}})
                   }
                }}>{'CONTINUE >>'}</button>}</span> */}
                </div>
            <div className={ModelCSS.AvailableShirts} >

                <div className={ModelCSS.ShirtAvatar} style={props.phase.modelSelected.data === '长袖' ? {backgroundColor: 'gray'} : {backgroundColor: 'none'}} onClick={()=> {
                    
                    return setData(prevState => prevState = '长袖');
                    
                    }}>
                    <img src={img}></img>
                </div>
                <div className={ModelCSS.ShirtAvatar} style={props.phase.modelSelected.data === 'T-Shirt' ? {backgroundColor: 'gray'} : {backgroundColor: 'none'}} onClick={()=> {
                    return setData(prevState => prevState = 'T-Shirt');
                }}>
                    <img src={img2}></img>
                </div>
            </div>
            {/* <form onSubmit={(e)=> {
                e.preventDefault();
                if(data!== null) {
                    props.setPhase({
                        modelSelected: {data, status: true}, 
                        sizeSelected: {...props.phase.sizeSelected, status:false}})}}}>

                <select onChange={(e)=> {
                    setData(e.target.value);
                }}>
                    <option value="">Select</option>
                    <option value="Manga corta">T-shirt</option>
                    <option value="Long sleeve">Long sleeve</option>
                </select>
                <input type="submit" disabled={data===null} value={data == null ? 'Select model' : 'Next'}/>
            </form> */}
            </div>

        
    )
}

export default ShirtModel;