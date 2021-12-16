import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";
import { Code, VStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { serializeError } from "serialize-error";

function Error({
  statusCode,
  error,
}: {
  statusCode: number;
  error: Record<string, any>;
}) {
  const isServer = Boolean(statusCode);

  return (
    <VStack
      h="100vh"
      alignItems="stretch"
      justifyContent="center"
      maxW={1200}
      mx="auto"
    >
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>
          {isServer ? `(${statusCode}) Server` : "Client"} Error{" "}
        </AlertTitle>
      </Alert>
      <chakra.pre overflowWrap="break-word" wordWrap="break-word">
        {JSON.stringify(error, null, 2)}
      </chakra.pre>
    </VStack>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const serializedError = serializeError(err);
  return { statusCode, error: serializedError };
};

export default Error;
