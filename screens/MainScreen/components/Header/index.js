import { Image, Text, View, TouchableOpacity } from "react-native";
import { format } from "../../css/Styles.js"

export default function Header() {
    return(
        <View style={format.header}>

            <TouchableOpacity onPress={()=>alert("É o r's")}>
                <Image
                    source={require("../../../../assets/rs.png")}
                    style={format.leftimgheader}
                />
            </TouchableOpacity>

            <Text style={format.txtheader}>Elementos</Text>
            
            <TouchableOpacity onPress={()=>alert("Configurações")}>
                <Image 
                    source={require("../../../../assets/gear.png")}
                    style={format.rightimgheader}
                />
            </TouchableOpacity>
            
        </View>
    )
}