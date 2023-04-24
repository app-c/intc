import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Hight, titleSize, w } from '../../utils/size';
import { cor } from '../../theme';
import { fonts } from '../../theme/fonts';

interface props {
   selected: boolean;
}

export const Container = styled.View``;

export const title = styled.Text`
   font-size: ${Hight * 0.03}px;
   font-family: ${fonts.rBold};
   color: ${cor.blue[4]};

   margin-bottom: 10px;
`;
export const text = styled.Text`
   font-size: ${titleSize}px;
   font-family: ${fonts.rRgular};
   color: ${cor.light[1]};
`;

export const content = styled.View`
   width: 100%;
   border-radius: 10px;

   margin-top: ${Hight * 0.02}px;
`;

export const grid = styled.TouchableOpacity<props>`
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin: 10px 0;
   background-color: ${h => (h.selected ? cor.orange[3] : cor.blue[4])};
   padding: 10px;
   border-radius: 5px;
`;

export const line = styled.View`
   width: 100%;
   height: 1px;
   border-width: 0.8px;
   border-style: dashed;
`;
