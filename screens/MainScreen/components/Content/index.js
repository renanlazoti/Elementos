import { View, TouchableOpacity, Image, Text, Alert } from "react-native"
import { format } from "../../css/Styles.js"

export default function Content( props ) {

    return(
        <View style={{flex: 8}}>
            <View style={format.content}>
                
                <TouchableOpacity onPress={()=> {props.acao.navigate("CameraScreen"); }} style={format.btn}>
                    <Image source={require("../../../../assets/camera.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {props.acao.navigate("GalleryScreen"); }} style={format.btn}>
                    <Image source={require("../../../../assets/galeria.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Galeria</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {props.acao.navigate("CodebarScreen")}} style={format.btn}>
                    <Image source={require("../../../../assets/barcode.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Código de Barras</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {props.acao.navigate("MapScreen")}} style={format.btn}>
                    <Image source={require("../../../../assets/map.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Mapa</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

