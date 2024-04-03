import React, { useEffect } from "react";
import { Box, Heading, Text, Image, Flex, IconButton, useMediaQuery, SimpleGrid } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin, FaUser, FaImage } from "react-icons/fa";

const Index = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    // jQuery code for smooth scrolling
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        500,
        "linear",
      );
    });
  }, []);

  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          My Portfolio
        </Heading>
        <Box>
          <IconButton as="a" href="#about" aria-label="About" icon={<FaUser />} mr={2} />
          <IconButton as="a" href="#portfolio" aria-label="Portfolio" icon={<FaImage />} />
        </Box>
      </Flex>

      {/* About Section */}
      <Box id="about" p={6}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="xl">Hi, I'm John Doe, a passionate web developer with expertise in React, jQuery, and responsive web design. I enjoy creating engaging and user-friendly websites.</Text>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" p={6}>
        <Heading as="h2" size="xl" mb={4}>
          My Portfolio
        </Heading>
        <SimpleGrid columns={isLargerThan768 ? 3 : 1} spacing={10}>
          <Image src="https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjAxfGVufDB8fHx8MTcxMjE0OTQ2MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 1" />
          <Image src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjAyfGVufDB8fHx8MTcxMjE0OTQ2MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 2" />
          <Image src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjAzfGVufDB8fHx8MTcxMjE0OTQ2Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 3" />
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Flex as="footer" align="center" justify="center" wrap="wrap" padding={6} bg="teal.500" color="white">
        <IconButton as="a" href="https://twitter.com/johndoe" aria-label="Twitter" icon={<FaTwitter />} size="lg" mr={4} />
        <IconButton as="a" href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" mr={4} />
        <IconButton as="a" href="https://www.linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
      </Flex>
    </Box>
  );
};

export default Index;
