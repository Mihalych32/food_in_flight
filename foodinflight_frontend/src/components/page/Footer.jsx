import React from "react";
import { Box, Wrap, WrapItem, List, ListItem, Flex, Spacer, Text, Link} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Footer = () => {
  return(
    <Box 
      className="footer" 
      bgColor="rgba(0, 0, 0, 1)" 
      borderTop="1px solid rgba(0,0,0,0.15)" 
      h="calc(100% - 70px)"
      
      padding="10px 20px"
    >

      <Flex className="footer__content" flexDirection="column">
        <Flex 
          justifyContent="center" 
          gap="30px" 
          textAlign="center" 
          textColor="white"
        >
          <Link 
            href={`${process.env.REACT_APP_FRONTEND_PROTOCOL_HOST}/user-agreement`}
          >
            Пользовательское соглашение
          </Link>

          <Link 
            href={`${process.env.REACT_APP_FRONTEND_PROTOCOL_HOST}/contacts`}
          >
            Контакты
          </Link>

          <Link
            href={`${process.env.REACT_APP_FRONTEND_PROTOCOL_HOST}/contacts`}
          >
            Обратная связь
          </Link>

          <Link
            href={`${process.env.REACT_APP_FRONTEND_PROTOCOL_HOST}/trademarks`}
          >
            Товарные знаки
          </Link>

        </Flex>
          
        <Flex 
          justifyContent="space-between" 
          margin="10px 0px 10px 0px"
          textColor="white"
        >
          <Text>© 2023 ООО «Food in Flight»</Text>
          <Text>Проект компании Шпонка Шапокляка</Text>
        </Flex>
          
      </Flex>
      
    </Box>
  )
}

export default Footer