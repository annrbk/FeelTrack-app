import { View } from "react-native";
import { TestResult } from "../types/tests";
import ResultSubscaleItem from "./ResultSubscaleItem";

export default function ResultSubscale({ result }: { result: TestResult }) {
  return (
    <View>
      <ResultSubscaleItem
        subscale="IS"
        sum={result?.sumIS}
        result={result?.subscaleResults?.resultIS}
      />
      <ResultSubscaleItem
        subscale="HS"
        sum={result?.sumHS}
        result={result?.subscaleResults?.resultHS}
      />
      <ResultSubscaleItem
        subscale="RS"
        sum={result?.sumRS}
        result={result?.subscaleResults?.resultRS}
      />
    </View>
  );
}
