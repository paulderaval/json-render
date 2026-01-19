// Existing components
export { Alert } from "./alert";
export { Badge } from "./badge";
export { Button } from "./button";
export { Card } from "./card";
export { Chart } from "./chart";
export { DatePicker } from "./date-picker";
export { Divider } from "./divider";
export { Empty } from "./empty";
export { Grid } from "./grid";
export { Heading } from "./heading";
export { List } from "./list";
export { Metric } from "./metric";
export { Select } from "./select";
export { Stack } from "./stack";
export { Table } from "./table";
export { Text } from "./text";
export { TextField } from "./text-field";

// New chart components
export { LineChart, AreaChart, PieChart, BarChart } from "./charts";

// New layout components
export { Container, Tabs, TabPanel, Section, Navbar, Footer } from "./layout";

// New data display components
export { Progress, Stat, DataList, Avatar, Code } from "./data";

// New form components
export { Checkbox, Toggle, Radio, Textarea } from "./forms";

// New content components
export { Callout, CodeBlock } from "./content";

// New marketing components
export { Hero, Feature, FeatureGrid, CTA } from "./marketing";

// Import all for registry
import { Alert } from "./alert";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card } from "./card";
import { Chart } from "./chart";
import { DatePicker } from "./date-picker";
import { Divider } from "./divider";
import { Empty } from "./empty";
import { Grid } from "./grid";
import { Heading } from "./heading";
import { List } from "./list";
import { Metric } from "./metric";
import { Select } from "./select";
import { Stack } from "./stack";
import { Table } from "./table";
import { Text } from "./text";
import { TextField } from "./text-field";

import { LineChart, AreaChart, PieChart, BarChart } from "./charts";
import { Container, Tabs, TabPanel, Section, Navbar, Footer } from "./layout";
import { Progress, Stat, DataList, Avatar, Code } from "./data";
import { Checkbox, Toggle, Radio, Textarea } from "./forms";
import { Callout, CodeBlock } from "./content";
import { Hero, Feature, FeatureGrid, CTA } from "./marketing";

export const componentRegistry = {
  // Existing components
  Alert,
  Badge,
  Button,
  Card,
  Chart,
  DatePicker,
  Divider,
  Empty,
  Grid,
  Heading,
  List,
  Metric,
  Select,
  Stack,
  Table,
  Text,
  TextField,
  // Chart components (Recharts-based)
  LineChart,
  AreaChart,
  PieChart,
  BarChart,
  // Layout components
  Container,
  Tabs,
  TabPanel,
  Section,
  Navbar,
  Footer,
  // Data display components
  Progress,
  Stat,
  DataList,
  Avatar,
  Code,
  // Form components
  Checkbox,
  Toggle,
  Radio,
  Textarea,
  // Content components
  Callout,
  CodeBlock,
  // Marketing components
  Hero,
  Feature,
  FeatureGrid,
  CTA,
};
