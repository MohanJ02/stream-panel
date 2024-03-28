'use client';

import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  Stack,
  ButtonGroup,
  useColorModeValue,
} from '@/components/chakra';
import { GradientText, NextLink } from '@/components/client';
import {
  // AwsLogo,
  ChakraLogo,
  // GcpLogo,
  NextLogo,
  PrismaLogo,
  TypescriptLogo,
} from '@/icons';

export const HeroSection = () => {
  const logoColor = useColorModeValue('gray.300', 'gray.700');

  return (
    <Container maxW="full">
      <Center minHeight="100vh">
        <Container as={Stack} maxW="container.lg" textAlign="center" align="center">
          <Heading size="4xl" mb={4}>
          Unleash Next-Gen Server Control <GradientText>with StreamPanel</GradientText>
          </Heading>

          <Container maxW="container.md" textAlign="center">
            <Text fontSize="xl">
            Let us manage your dedicated environment, from launch to growth. (Focuses on ease of use and scalability)
            </Text>
          </Container>

          <ButtonGroup mt={8} spacing={3} size="lg" colorScheme="brand">
            <NextLink href="/login">
              <Button variant="solid">Get started</Button>
            </NextLink>
            <Button variant="outline">Live demo</Button>
          </ButtonGroup>

          <Text my={2} fontSize="sm" color="gray.500">
            our apps, our cloud. We handle everything.
          </Text>

          <Stack
            direction="row"
            justify="center"
            align="center"
            spacing={12}
            marginY={8}
            color={logoColor}
          >
            <NextLogo boxSize={16} />
            <PrismaLogo boxSize={14} />
            <TypescriptLogo boxSize={16} />
            <ChakraLogo boxSize={12} />
            {/* <AwsLogo boxSize={16} /> */}
            {/* <GcpLogo boxSize={16} /> */}
          </Stack>
        </Container>
      </Center>
    </Container>
  );
};
