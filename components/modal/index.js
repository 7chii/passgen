import { View , Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";

export function ModalPassword({ password, handleClose}){
    return(
        <View style={style.componente}>
        <View style={style.window}>
            <Text style={style.title}>senha</Text>
            <Pressable style={style.senha}>
                <Text style={style.senhaText}>
                    {password}
                </Text>
            </Pressable>
            <View style={style.buttContain}>
            <TouchableOpacity style={style.butt} onPress={handleClose}>
                <Text>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.butt, style.bluebutt]}>
                <Text style={style.blueButtText}>Salvar Senha</Text>
            </TouchableOpacity>
            </View>
        </View>

        </View>
    )
}
const style = StyleSheet.create({
    componente:{
    backgroundColor:"rgba(24, 24, 24, 0.6)", 
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    },
    window:{
        backgroundColor:"#FFF",
        width:"80%",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    title:{
        fontWeight:'bold',
        fontSize:30,
        color:'#000',
    },
    senha:{
        backgroundColor:'#0e0e0e',
        borderRadius:8,
        height:"18%",
        width:"80%",
        marginTop:30,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
    },
    senhaText:{
        color:'#FFF',
        fontSize:25,
    },
    buttContain:{
        flexDirection:"row",
        width:"80%",
        marginTop:8,
        alignItems:'center',
        justifyContent:'space-between'
    }, butt:{
        flex:1,
        alignItems:'center',
        marginTop:14,
        marginBottom:14,
        padding:8,
    },
    bluebutt:{
        backgroundColor:'#392de9',
        borderRadius:8,
    },
    blueButtText:{
        color:'#FFF',
        fontWeight:'bold'
    }
})