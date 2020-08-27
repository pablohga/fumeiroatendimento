  import React, { useState, useEffect, Component } from "react";
import { toast } from "react-toastify";

import api from "../../../services/api";
import socketIOClient from 'socket.io-client'
import NoImage from "../../../assets/images/no-image.jpg";
import CategoryModal from "../../../components/CategoryModal";
import ProductModal from '../../../components/ProductModal';
import SimpleMenu from "../../../components/menu"

import {
  Container,
  CategoryCard,
  CategoryInfo,
  CategoryImage,
  CategoryDetails
} from "./styles";

import {
  EditDeleteOptions,
  EditButton,
  DeleteButton,
  AddButton,
  UndoButton
} from "../../../styles/buttons";

import axios from 'axios';



//------------------



//-----------------


 export class SocketBtn extends React.Component{
	 
	constructor(){
		super()
		this.state = {
			//serverURL:'https://wildninjas.site',
			serverURL:'http://localhost:3000',
			informationReceived:'Nada ainda!! Vc deve clicar no botao!'
		}
		
		const socket = socketIOClient(this.state.serverURL)
		socket.on('infoEvent',(receivedInfo) => {
			this.setState({
				informationReceived: receivedInfo
			})
		})
		
	}
	emitInfoToAll = () => {
		//console.log('um evento com informação ira se enviado para all clientes conectados')
 
		const socket = socketIOClient(this.state.serverURL)
		socket.emit('infoEvent','CHEGOU UM NOVO PEDIDO!!!')
	}
	 		 render(){
				  return(

					  <div className="DivEstado">
					  <button onClick={()=>this.emitInfoToAll()}>mandar informações</button><br/>
					<br/><br/>
					{this.state.informationReceived}
					  
					  
					  </div>

				  )


			  }

  


				
 }

 export default SocketBtn;