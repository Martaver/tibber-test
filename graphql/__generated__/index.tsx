import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import gql from 'graphql-tag';
import * as React from 'react';
export type Maybe<T> = null | T;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  Boolean: boolean;
  DynamicType: any;
  Float: number;
  ID: string;
  Int: number;
  ProfileQuestionInput: any;
  SettingsItemInputValue: any;
  String: string;
  WeekDay: any;
}

export interface About {
  __typename: 'About';
  items?: Maybe<Array<Maybe<AboutItem>>>;
}

export interface AboutItem {
  __typename: 'AboutItem';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface Account {
  __typename: 'Account';
  items?: Maybe<Array<Maybe<AccountItem>>>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface AccountItem {
  __typename: 'AccountItem';
  callToAction?: Maybe<CallToAction>;
  icon?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  subTitleColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleColor?: Maybe<Scalars['String']>;
}

export interface Address {
  __typename: 'Address';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  addressText?: Maybe<Scalars['String']>;
  astronomy?: Maybe<Astronomy>;
  city: Scalars['String'];
  /** ISO 3166-1 alpha-2 */
  country: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  postalCode: Scalars['String'];
  solar?: Maybe<Astronomy>;
}

export interface AddVehicleResult {
  __typename: 'AddVehicleResult';
  error?: Maybe<ErrorResponse>;
  vehicles?: Maybe<Array<Maybe<MyVehicle>>>;
}

export interface Alert {
  __typename: 'Alert';
  cancelText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  /** @deprecated Moved to description */
  message?: Maybe<Scalars['String']>;
  okText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface AppState {
  __typename: 'AppState';
  frontScreens?: Maybe<Array<Maybe<AppStateFronScreen>>>;
  journey?: Maybe<AppStateJourney>;
}

export interface AppStateFronScreen {
  __typename: 'AppStateFronScreen';
  bubbles?: Maybe<Array<Maybe<Scalars['String']>>>;
  bubblesSortOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeId?: Maybe<Scalars['String']>;
}

export interface AppStateFronScreenMutation {
  bubbles?: Maybe<Array<Maybe<Scalars['String']>>>;
  bubblesSortOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeId?: Maybe<Scalars['String']>;
}

export interface AppStateJourney {
  __typename: 'AppStateJourney';
  hasVisitedDeviceList?: Maybe<Scalars['Boolean']>;
  hasVisitedPairDevices?: Maybe<Scalars['Boolean']>;
}

export interface AppStateJourneyMutation {
  hasVisitedDeviceList?: Maybe<Scalars['Boolean']>;
  hasVisitedPairDevices?: Maybe<Scalars['Boolean']>;
}

export interface AppStateMutation {
  frontScreens?: Maybe<Array<Maybe<AppStateFronScreenMutation>>>;
  journey?: Maybe<AppStateJourneyMutation>;
}

export interface Astronomy {
  __typename: 'Astronomy';
  moonFraction?: Maybe<Scalars['Float']>;
  sunIsUp?: Maybe<Scalars['Boolean']>;
  sunrise?: Maybe<Scalars['String']>;
  sunset?: Maybe<Scalars['String']>;
}

export enum Avatar {
  Floorhouse1 = 'floorhouse1',
  Floorhouse2 = 'floorhouse2',
  Floorhouse3 = 'floorhouse3',
  Castle = 'castle',
  Apartment = 'apartment',
  Cottage = 'cottage',
  Rowhouse = 'rowhouse',
}

export interface AwayMode {
  __typename: 'AwayMode';
  isSupported?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<AwayModeSettings>;
}

export interface AwayModeSettings {
  __typename: 'AwayModeSettings';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}

export interface Bubble {
  __typename: 'Bubble';
  description?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueText?: Maybe<Scalars['String']>;
}

export interface Button {
  __typename: 'Button';
  backgroundColor?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
}

export interface CallToAction {
  __typename: 'CallToAction';
  link?: Maybe<Scalars['String']>;
  redirectUrlStartsWith?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface CallToActionAlert {
  __typename: 'CallToActionAlert';
  callToAction?: Maybe<CallToAction>;
  cancelText?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ClientSubscription {
  __typename: 'ClientSubscription';
  evChargerState?: Maybe<EvCharger>;
  liveMeasurement?: Maybe<PulseMeasurement>;
}

export interface ClientSubscriptionLiveMeasurementArgs {
  deviceId?: Maybe<Scalars['String']>;
}

export interface ClientSubscriptionEvChargerStateArgs {
  chargerId?: Maybe<Scalars['String']>;
}

export interface Comparison {
  __typename: 'Comparison';
  average?: Maybe<ComparisonData>;
  efficient?: Maybe<ComparisonData>;
  from?: Maybe<Scalars['String']>;
  home?: Maybe<ComparisonData>;
  homeEfficency?: Maybe<Scalars['String']>;
  homeEfficencyDescription?: Maybe<Scalars['String']>;
  /** @deprecated Moved to from 2019.11.11 */
  month?: Maybe<Scalars['Int']>;
  resolution?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  /** @deprecated Moved to from 2019.11.11 */
  year?: Maybe<Scalars['Int']>;
}

export interface ComparisonData {
  __typename: 'ComparisonData';
  consumption?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
}

export interface Consumption {
  __typename: 'Consumption';
  annualValues?: Maybe<Scalars['DynamicType']>;
  currency?: Maybe<Scalars['String']>;
  dailyValues?: Maybe<Scalars['DynamicType']>;
  energyCost?: Maybe<Scalars['Float']>;
  highestResolution?: Maybe<ConsumptionResolution>;
  hourlyValues?: Maybe<Scalars['DynamicType']>;
  latestTransactionTimestamp?: Maybe<Scalars['String']>;
  monthlyValues?: Maybe<Scalars['DynamicType']>;
  timeZone?: Maybe<Scalars['String']>;
  totalConsumption?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
  valuesFrom?: Maybe<Scalars['String']>;
  valuesTo?: Maybe<Scalars['String']>;
  weeklyValues?: Maybe<Scalars['DynamicType']>;
}

export interface ConsumptionAnalysis {
  __typename: 'ConsumptionAnalysis';
  currency?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated 19.11.11 */
  defaultResolution?: Maybe<ConsumptionResolution>;
  /** @deprecated Deprecated 19.11.11 */
  firstValueAt?: Maybe<Scalars['String']>;
  isPreLive?: Maybe<Scalars['Boolean']>;
  resolutions?: Maybe<Array<Maybe<ConsumptionResolution>>>;
  siteTitle?: Maybe<Scalars['String']>;
  valuesFrom?: Maybe<Scalars['String']>;
  valuesTo?: Maybe<Scalars['String']>;
}

export interface ConsumptionAnalysisItem {
  __typename: 'ConsumptionAnalysisItem';
  chart?: Maybe<ConsumptionChart>;
  description?: Maybe<Scalars['String']>;
  description2?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated 19.10.31 */
  netConsumptionBubble?: Maybe<Bubble>;
  netConsumptionRow?: Maybe<ConsumptionAnalysisRow>;
  /** @deprecated Deprecated 19.10.31 */
  netConsumptionTitle?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated 19.10.31 */
  selfConsumptionBubble?: Maybe<Bubble>;
  selfConsumptionRow?: Maybe<ConsumptionAnalysisRow>;
  /** @deprecated Deprecated 19.10.31 */
  selfConsumptionTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  totalConsumptionBubble?: Maybe<Bubble>;
}

export interface ConsumptionAnalysisRow {
  __typename: 'ConsumptionAnalysisRow';
  description?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
}

export interface ConsumptionChart {
  __typename: 'ConsumptionChart';
  consumptionUnitText?: Maybe<Scalars['String']>;
  costUnitText?: Maybe<Scalars['String']>;
  displayCostAsDefault?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<ConsumptionChartItem>>>;
  itemsDecimalPlaces?: Maybe<Scalars['Int']>;
  priceUnitText?: Maybe<Scalars['String']>;
  totalConsumptionYAxis?: Maybe<YAxis>;
  totalCostYAxis?: Maybe<YAxis>;
  /** @deprecated Moved to consumptionUnitText & costUnitText */
  unitText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to totalConsumptionYAxis */
  yMax?: Maybe<Scalars['Float']>;
  /** @deprecated Moved to totalConsumptionYAxis */
  yMin?: Maybe<Scalars['Float']>;
}

export interface ConsumptionChartItem {
  __typename: 'ConsumptionChartItem';
  from?: Maybe<Scalars['String']>;
  fromToText?: Maybe<Scalars['String']>;
  isPreLive?: Maybe<Scalars['Boolean']>;
  netConsumption?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  selfConsumption?: Maybe<Scalars['Float']>;
  /** @deprecated Deprecated 19.11.06 */
  showSelfConsumption?: Maybe<Scalars['Boolean']>;
  to?: Maybe<Scalars['String']>;
  totalConsumption?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
}

export interface ConsumptionMonth {
  __typename: 'ConsumptionMonth';
  consumptionText?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  costEstimate?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  kwh?: Maybe<Scalars['Float']>;
  kwhEstimate?: Maybe<Scalars['Float']>;
  /** @deprecated Only been used in development */
  kwhProduced?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
}

export enum ConsumptionResolution {
  Annual = 'annual',
  Monthly = 'monthly',
  Weekly = 'weekly',
  Daily = 'daily',
  Hourly = 'hourly',
}

export interface CreditCard {
  __typename: 'CreditCard';
  brand?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
}

export interface DayNightSchedule {
  __typename: 'DayNightSchedule';
  comfortWeight?: Maybe<Scalars['Int']>;
  day?: Maybe<DayNightScheduleSettings>;
  enablePriceOptimization?: Maybe<Scalars['Boolean']>;
  isSupported?: Maybe<Scalars['Boolean']>;
  night?: Maybe<DayNightScheduleSettings>;
}

export interface DayNightScheduleSettings {
  __typename: 'DayNightScheduleSettings';
  isEnabled?: Maybe<Scalars['Boolean']>;
  localTimeFrom?: Maybe<Scalars['String']>;
  localTimeTo?: Maybe<Scalars['String']>;
  recurringDays?: Maybe<Array<Maybe<Scalars['WeekDay']>>>;
}

export interface DayNightScheduleSettingsInput {
  isEnabled: Scalars['Boolean'];
  localTimeFrom: Scalars['String'];
  localTimeTo: Scalars['String'];
  recurringDays: Array<Maybe<Scalars['WeekDay']>>;
}

export interface Disaggregation {
  __typename: 'Disaggregation';
  behaviorConsumptionCost?: Maybe<Scalars['Float']>;
  behaviorConsumptionKwh?: Maybe<Scalars['Float']>;
  behaviorConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  electricVehicleConsumptionCost?: Maybe<Scalars['Float']>;
  electricVehicleConsumptionKwh?: Maybe<Scalars['Float']>;
  electricVehicleConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  fixedConsumptionCost?: Maybe<Scalars['Float']>;
  fixedConsumptionKwh?: Maybe<Scalars['Float']>;
  fixedConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  heatingConsumptionCost?: Maybe<Scalars['Float']>;
  heatingConsumptionKwh?: Maybe<Scalars['Float']>;
  heatingConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  isValid?: Maybe<Scalars['Boolean']>;
  month?: Maybe<Scalars['Int']>;
  totalConsumptionKwh?: Maybe<Scalars['Int']>;
  totalCost?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
}

export interface ElectricVehicle {
  __typename: 'ElectricVehicle';
  backgroundStyle?: Maybe<ElectricVehicleBackgroundStyle>;
  battery?: Maybe<ElectricVehicleBattery>;
  /** @deprecated Deprecated since 2018-03-05 */
  batteryRangeText?: Maybe<Scalars['String']>;
  batteryText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingDoneImgUrl?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingDoneText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingSpeedImgUrl?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingSpeedText?: Maybe<Scalars['String']>;
  chargingText?: Maybe<Scalars['String']>;
  consumptionText?: Maybe<Scalars['String']>;
  consumptionUnitText?: Maybe<Scalars['String']>;
  energyCostUnitText?: Maybe<Scalars['String']>;
  energyDealCallToAction?: Maybe<CallToAction>;
  faqUrl?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen 2019-01-01 */
  hourTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  isAlive?: Maybe<Scalars['Boolean']>;
  lastSeen?: Maybe<Scalars['String']>;
  lastSeenText?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  noEnergyDealText?: Maybe<Scalars['String']>;
  schedule?: Maybe<ElectricVehicleSchedule>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertCancelText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertDescription?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertDisableText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertSuspendText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertTitle?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-11-30 */
  scheduleDescription?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleSuspendedText 2019-31-05 */
  scheduleSuspendedText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen 2019-01-01 */
  scheduleTitle?: Maybe<Scalars['String']>;
  settingsButtonText?: Maybe<Scalars['String']>;
  settingsScreen?: Maybe<ElectricVehicleSettingsScreen>;
  shortName?: Maybe<Scalars['String']>;
}

export enum ElectricVehicleBackgroundStyle {
  Default = 'default',
  Inactive = 'inactive',
  Saving = 'saving',
}

export interface ElectricVehicleBattery {
  __typename: 'ElectricVehicleBattery';
  chargeLimit?: Maybe<Scalars['Int']>;
  /** @deprecated Deprecated since 2018-03-05 */
  estimatedRange?: Maybe<Scalars['Float']>;
  /** @deprecated Deprecated since 2018-03-05 */
  estimatedRangeText?: Maybe<Scalars['String']>;
  isCharging?: Maybe<Scalars['Boolean']>;
  percent?: Maybe<Scalars['Int']>;
  percentColor?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-11-30 */
  percentText?: Maybe<Scalars['String']>;
  /** @deprecated Duplication of lastSeen 2019-31-01 */
  timestamp?: Maybe<Scalars['String']>;
}

export interface ElectricVehicleConsumption {
  __typename: 'ElectricVehicleConsumption';
  currency?: Maybe<Scalars['String']>;
  homes?: Maybe<Array<Maybe<ElectricVehicleHomeConsumption>>>;
}

export interface ElectricVehicleConsumptionMonth {
  __typename: 'ElectricVehicleConsumptionMonth';
  consumption?: Maybe<Scalars['Float']>;
  consumptionText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  energyCost?: Maybe<Scalars['Float']>;
  energyCostText?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
}

export interface ElectricVehicleConsumptionValue {
  __typename: 'ElectricVehicleConsumptionValue';
  consumption?: Maybe<Scalars['Float']>;
  energyCost?: Maybe<Scalars['Float']>;
  from?: Maybe<Scalars['String']>;
}

export interface ElectricVehicleDisableScheduleAlert {
  __typename: 'ElectricVehicleDisableScheduleAlert';
  cancelText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disableText?: Maybe<Scalars['String']>;
  suspendText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ElectricVehicleHomeConsumption {
  __typename: 'ElectricVehicleHomeConsumption';
  homeId?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<ElectricVehicleConsumptionValue>>>;
}

export interface ElectricVehicleMutation {
  __typename: 'ElectricVehicleMutation';
  setSchedule?: Maybe<ElectricVehicle>;
}

export interface ElectricVehicleMutationSetScheduleArgs {
  isEnabled?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  localTimeTo?: Maybe<Scalars['String']>;
  minBatteryLevel?: Maybe<Scalars['Int']>;
}

export interface ElectricVehicleSchedule {
  __typename: 'ElectricVehicleSchedule';
  isEnabled?: Maybe<Scalars['Boolean']>;
  isSupported?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  localTimeTo?: Maybe<Scalars['String']>;
  minBatteryLevel?: Maybe<Scalars['Int']>;
}

export interface ElectricVehicleSettingsScreen {
  __typename: 'ElectricVehicleSettingsScreen';
  chargingCableNotConnectedEnabled?: Maybe<Scalars['Boolean']>;
  chargingCableNotConnectedTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hourTitle?: Maybe<Scalars['String']>;
  minBatteryLevelIsSupported?: Maybe<Scalars['Boolean']>;
  minBatteryLevelTitle?: Maybe<Scalars['String']>;
  /** @deprecated Moved to scheduleButtonText 2019-31-05 */
  openButtonText?: Maybe<Scalars['String']>;
  scheduleDisableAlert?: Maybe<ElectricVehicleDisableScheduleAlert>;
  scheduleSuspendedText?: Maybe<Scalars['String']>;
  scheduleTitle?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface EmptyState {
  __typename: 'EmptyState';
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface EnergyCostDisaggregation {
  __typename: 'EnergyCostDisaggregation';
  /** @deprecated Deprecated 2019.11.11 */
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<EnergyCostDisaggregationItem>>>;
  /** @deprecated Moved to from 2019.11.11 */
  month?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  totalDescription?: Maybe<Scalars['String']>;
  totalTitle?: Maybe<Scalars['String']>;
  /** @deprecated Moved to from 2019.11.11 */
  year?: Maybe<Scalars['Int']>;
}

export interface EnergyCostDisaggregationItem {
  __typename: 'EnergyCostDisaggregationItem';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  strokeColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface EnergyDeal {
  __typename: 'EnergyDeal';
  currentProducer?: Maybe<Producer>;
  signupStatus?: Maybe<EnergyDealSignupStatus>;
}

export interface EnergyDealSignupStatus {
  __typename: 'EnergyDealSignupStatus';
  completedPct?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  redirectUrlStartsWith?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface EnergyPriceDisaggregation {
  __typename: 'EnergyPriceDisaggregation';
  averagePrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<EnergyPriceDisaggregationItem>>>;
  /** @deprecated Moved to from 2019.11.11 */
  month?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  /** @deprecated Moved to from 2019.11.11 */
  year?: Maybe<Scalars['Int']>;
}

export interface EnergyPriceDisaggregationItem {
  __typename: 'EnergyPriceDisaggregationItem';
  costText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  strokeColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
}

export interface ErrorResponse {
  __typename: 'ErrorResponse';
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
}

export interface EvBrand {
  __typename: 'EvBrand';
  brand?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  models?: Maybe<Array<Maybe<EvBrandModel>>>;
}

export interface EvBrandModel {
  __typename: 'EvBrandModel';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface EvCharger {
  __typename: 'EvCharger';
  backgroundStyle?: Maybe<ElectricVehicleBackgroundStyle>;
  id?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  isAlive?: Maybe<Scalars['Boolean']>;
  lastSeen?: Maybe<Scalars['String']>;
  mainScreen?: Maybe<EvChargerMainScreen>;
  name?: Maybe<Scalars['String']>;
  schedule?: Maybe<EvChargerSchedule>;
  settings?: Maybe<EvChargerSettings>;
  settingsScreen?: Maybe<EvChargerSettingsScreen>;
  shortName?: Maybe<Scalars['String']>;
  state?: Maybe<EvChargerState>;
}

export interface EvChargerCase {
  __typename: 'EvChargerCase';
  color?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface EvChargerMainScreen {
  __typename: 'EvChargerMainScreen';
  consumptionText?: Maybe<Scalars['String']>;
  consumptionUnitText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  energyCostUnitText?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated with permanently settings */
  lockButton?: Maybe<Button>;
  /** @deprecated Deprecated with permanently settings */
  lockButtonAlert?: Maybe<Alert>;
  settingsButton?: Maybe<Button>;
  siteTitle?: Maybe<Scalars['String']>;
  startChargingAlert?: Maybe<Alert>;
  startChargingButton?: Maybe<Button>;
  title?: Maybe<Scalars['String']>;
}

export interface EvChargerMutation {
  __typename: 'EvChargerMutation';
  setCharging?: Maybe<EvCharger>;
  setSchedule?: Maybe<EvCharger>;
  setSettings?: Maybe<EvCharger>;
}

export interface EvChargerMutationSetSettingsArgs {
  caseName?: Maybe<Scalars['String']>;
  maxChargePower?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  permanentCableLock?: Maybe<Scalars['Boolean']>;
}

export interface EvChargerMutationSetScheduleArgs {
  isEnabled?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  localTimeTo?: Maybe<Scalars['String']>;
}

export interface EvChargerMutationSetChargingArgs {
  isCharging?: Maybe<Scalars['Boolean']>;
}

export interface EvChargerPairConfig {
  __typename: 'EvChargerPairConfig';
  error?: Maybe<ErrorResponse>;
  pairedEvs?: Maybe<Array<Maybe<PairedEv>>>;
  supportedEvs?: Maybe<Array<Maybe<EvBrand>>>;
  wifiScanResult?: Maybe<Array<Maybe<WifiScanRecord>>>;
}

export interface EvChargerSchedule {
  __typename: 'EvChargerSchedule';
  isEnabled?: Maybe<Scalars['Boolean']>;
  isSupported?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  localTimeTo?: Maybe<Scalars['String']>;
}

export interface EvChargerSettings {
  __typename: 'EvChargerSettings';
  caseName?: Maybe<Scalars['String']>;
  /** @deprecated Moved to state */
  chargingCableIsLocked?: Maybe<Scalars['Boolean']>;
  loadBalanceAdditionalEvChargers?: Maybe<Scalars['Boolean']>;
  loadBalanceMainFuse?: Maybe<Scalars['Boolean']>;
  maxChargePower?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  permanentCableLock?: Maybe<Scalars['Boolean']>;
}

export interface EvChargerSettingsScreen {
  __typename: 'EvChargerSettingsScreen';
  cases?: Maybe<Array<Maybe<EvChargerCase>>>;
  description?: Maybe<Scalars['String']>;
  energyDealCallToAction?: Maybe<CallToAction>;
  hourTitle?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated */
  loadBalanceAdditionalEvChargersIsSupported?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecated */
  loadBalanceAdditionalEvChargersTitle?: Maybe<Scalars['String']>;
  loadBalanceMainFuseEnabled?: Maybe<Scalars['Boolean']>;
  loadBalanceMainFuseOn?: Maybe<Scalars['Boolean']>;
  loadBalanceMainFuseTitle?: Maybe<Scalars['String']>;
  maxChargePowerRange?: Maybe<IntRange>;
  maxChargePowerRates?: Maybe<IntInputValue>;
  maxChargePowerTitle?: Maybe<Scalars['String']>;
  myVehiclesCount?: Maybe<Scalars['Int']>;
  myVehiclesTitle?: Maybe<Scalars['String']>;
  nameTitle?: Maybe<Scalars['String']>;
  permanentCableLockTitle?: Maybe<Scalars['String']>;
  scheduleDisableAlert?: Maybe<ElectricVehicleDisableScheduleAlert>;
  scheduleEnableAlert?: Maybe<CallToActionAlert>;
  scheduleSuspendedText?: Maybe<Scalars['String']>;
  scheduleTitle?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface EvChargerState {
  __typename: 'EvChargerState';
  cableIsLocked?: Maybe<Scalars['Boolean']>;
  isCharging?: Maybe<Scalars['Boolean']>;
}

export interface GqlMutationGeneralResponse {
  __typename: 'GQLMutationGeneralResponse';
  error?: Maybe<ErrorResponse>;
}

export interface Greeting {
  __typename: 'Greeting';
  description?: Maybe<Scalars['String']>;
  showUntil?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Home {
  __typename: 'Home';
  address?: Maybe<Address>;
  avatar?: Maybe<Avatar>;
  awayMode?: Maybe<AwayMode>;
  comparisonAnalysis?: Maybe<ConsumptionAnalysis>;
  comparisonAnalysisItems?: Maybe<Array<Maybe<Comparison>>>;
  /** @deprecated Deprecated. Use comparison analysis instead. */
  comparisons?: Maybe<Array<Maybe<Comparison>>>;
  /** @deprecated Deprecated. Use consumption chart instead. */
  consumption?: Maybe<Consumption>;
  consumptionAnalysis?: Maybe<ConsumptionAnalysis>;
  consumptionAnalysisItems?: Maybe<Array<Maybe<ConsumptionAnalysisItem>>>;
  consumptionChart?: Maybe<ConsumptionChart>;
  /** @deprecated Deprecated. Use consumptionAnalysis instead. */
  consumptionMonths?: Maybe<Array<Maybe<ConsumptionMonth>>>;
  /** @deprecated Moved to consumptionAnalysis */
  consumptionReport?: Maybe<ConsumptionAnalysis>;
  /** @deprecated Moved to consumptionAnalysisItems */
  consumptionReports?: Maybe<Array<Maybe<ConsumptionAnalysisItem>>>;
  costDisaggregationAnalysis?: Maybe<ConsumptionAnalysis>;
  costDisaggregationAnalysisItems?: Maybe<
    Array<Maybe<EnergyCostDisaggregation>>
  >;
  /** @deprecated Deprecated. Use costDisaggregationAnalysis instead. */
  costDisaggregationMonths?: Maybe<Array<Maybe<EnergyCostDisaggregation>>>;
  currentMeterNoFormatted?: Maybe<Scalars['String']>;
  currentSettlementMethod?: Maybe<SettlementMethod>;
  /** @deprecated Moved to thermostat level. */
  dayNightSchedule?: Maybe<DayNightSchedule>;
  /** @deprecated Deprecated. Use costDisaggregation instead. */
  disaggregation?: Maybe<Array<Maybe<Disaggregation>>>;
  electricVehicle?: Maybe<ElectricVehicle>;
  electricVehicles?: Maybe<Array<Maybe<ElectricVehicle>>>;
  energyDeal?: Maybe<EnergyDeal>;
  evCharger?: Maybe<EvCharger>;
  evChargerConsumption?: Maybe<Array<Maybe<ElectricVehicleConsumptionValue>>>;
  evChargerConsumptionMonths?: Maybe<
    Array<Maybe<ElectricVehicleConsumptionMonth>>
  >;
  evChargerPairConfig?: Maybe<EvChargerPairConfig>;
  evChargers?: Maybe<Array<Maybe<EvCharger>>>;
  hasEnergyDeal?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  inverter?: Maybe<Inverter>;
  inverterProduction?: Maybe<InverterProduction>;
  inverters?: Maybe<Array<Maybe<Inverter>>>;
  invite?: Maybe<Invite>;
  lighting?: Maybe<Lighting>;
  manualMeterReadingIsSupported?: Maybe<Scalars['Boolean']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  meteringPointIdFormatted?: Maybe<Scalars['String']>;
  powerup?: Maybe<Powerup>;
  preLiveComparison?: Maybe<PreLiveComparison>;
  priceDisaggregationMonths?: Maybe<Array<Maybe<EnergyPriceDisaggregation>>>;
  production?: Maybe<Production>;
  productionAnalysis?: Maybe<ConsumptionAnalysis>;
  productionAnalysisItems?: Maybe<Array<Maybe<ConsumptionAnalysisItem>>>;
  productionChart?: Maybe<ConsumptionChart>;
  /** @deprecated Moved to productionAnalysis */
  productionMonths?: Maybe<Array<Maybe<ProductionMonth>>>;
  profileQuestions?: Maybe<Array<Maybe<HomeProfileQuestion>>>;
  pulse?: Maybe<Pulse>;
  pulseMeasurements?: Maybe<Array<Maybe<PulseMeasurement>>>;
  pulsePairConfig?: Maybe<PulsePairConfig>;
  pulsePairStatus?: Maybe<PulsePairStatus>;
  report?: Maybe<ReportRoot>;
  sensors?: Maybe<Array<Maybe<Sensor>>>;
  sensorsHistory?: Maybe<Array<Maybe<SensorHistory>>>;
  signupStatus?: Maybe<SignupStatus>;
  subscription?: Maybe<Subscription>;
  temperatures?: Maybe<Array<Maybe<Scalars['DynamicType']>>>;
  thermostats?: Maybe<Array<Maybe<Thermostat>>>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  weather?: Maybe<Weather>;
}

export interface HomeConsumptionReportArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeConsumptionAnalysisArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeConsumptionAnalysisItemsArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeConsumptionChartArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeProductionChartArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeProductionAnalysisArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeProductionAnalysisItemsArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeConsumptionReportsArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeConsumptionMonthsArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeConsumptionArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeComparisonAnalysisArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeComparisonAnalysisItemsArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeComparisonsArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeTemperaturesArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeCostDisaggregationAnalysisArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeCostDisaggregationAnalysisItemsArgs {
  from?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  to?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeDisaggregationArgs {
  resolution?: Maybe<Resolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeCostDisaggregationMonthsArgs {
  resolution?: Maybe<Resolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomePriceDisaggregationMonthsArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}

export interface HomeElectricVehicleArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeEvChargerArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeEvChargerPairConfigArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeEvChargerConsumptionMonthsArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeEvChargerConsumptionArgs {
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}

export interface HomeProductionArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}

export interface HomePulsePairConfigArgs {
  ignoreImpersonationRestriction?: Maybe<Scalars['Boolean']>;
  pulseCode?: Maybe<Scalars['String']>;
}

export interface HomePulsePairStatusArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomePulseMeasurementsArgs {
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}

export interface HomeInverterArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeInverterProductionArgs {
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}

export interface HomeMutation {
  __typename: 'HomeMutation';
  answerProfileQuestions?: Maybe<Array<Maybe<HomeProfileQuestion>>>;
  dismissMessage?: Maybe<Array<Maybe<Message>>>;
  electricVehicle?: Maybe<ElectricVehicleMutation>;
  evCharger?: Maybe<EvChargerMutation>;
  pairDeviceWithCredentials?: Maybe<PairDeviceResult>;
  pairDeviceWithOAuth?: Maybe<PairDeviceResult>;
  pulse?: Maybe<PulseMutation>;
  sendMeterReading?: Maybe<GqlMutationGeneralResponse>;
  setAwayMode?: Maybe<GqlMutationGeneralResponse>;
  setMeteringPointIdAndBindingTime?: Maybe<GqlMutationGeneralResponse>;
  thermostat?: Maybe<ThermostatMutation>;
  unpairDevices?: Maybe<GqlMutationGeneralResponse>;
}

export interface HomeMutationThermostatArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeMutationElectricVehicleArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeMutationEvChargerArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeMutationPulseArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeMutationPairDeviceWithOAuthArgs {
  authorizationCode?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
}

export interface HomeMutationPairDeviceWithCredentialsArgs {
  deviceType?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

export interface HomeMutationUnpairDevicesArgs {
  deviceIds?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface HomeMutationAnswerProfileQuestionsArgs {
  answers?: Maybe<Array<Maybe<HomeProfileQuestionAnswer>>>;
}

export interface HomeMutationSendMeterReadingArgs {
  meterReading?: Maybe<Scalars['Int']>;
}

export interface HomeMutationSetMeteringPointIdAndBindingTimeArgs {
  bindingTime?: Maybe<Scalars['String']>;
  isMovingIn?: Maybe<Scalars['Boolean']>;
  meteringPointId?: Maybe<Scalars['String']>;
}

export interface HomeMutationSetAwayModeArgs {
  from?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  to?: Maybe<Scalars['String']>;
}

export interface HomeMutationDismissMessageArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeProfileQuestion {
  __typename: 'HomeProfileQuestion';
  category?: Maybe<Scalars['String']>;
  currentValue?: Maybe<Scalars['DynamicType']>;
  currentValueText?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  input?: Maybe<HomeProfileQuestionInput>;
  isAnswered?: Maybe<Scalars['Boolean']>;
  propertyName?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  valueIsArray?: Maybe<Scalars['Boolean']>;
  valueType?: Maybe<Scalars['String']>;
}

export interface HomeProfileQuestionAnswer {
  propertyName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['ProfileQuestionInput']>;
}

export interface HomeProfileQuestionInput {
  __typename: 'HomeProfileQuestionInput';
  options?: Maybe<Scalars['DynamicType']>;
  type?: Maybe<Scalars['String']>;
}

export interface IntInputValue {
  __typename: 'IntInputValue';
  unit?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['Int']>>>;
}

export interface IntRange {
  __typename: 'IntRange';
  defaultValue?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
}

export interface Inverter {
  __typename: 'Inverter';
  alert?: Maybe<Alert>;
  bubble?: Maybe<Bubble>;
  description?: Maybe<Scalars['String']>;
  firstProductionValueAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface InverterProduction {
  __typename: 'InverterProduction';
  items?: Maybe<Array<Maybe<InverterProductionItem>>>;
  keyFigures?: Maybe<Array<Maybe<InverterProductionKeyFigure>>>;
  yAxis?: Maybe<YAxis>;
}

export interface InverterProductionItem {
  __typename: 'InverterProductionItem';
  from?: Maybe<Scalars['String']>;
  fromToText?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueText?: Maybe<Scalars['String']>;
}

export interface InverterProductionKeyFigure {
  __typename: 'InverterProductionKeyFigure';
  description?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
  valueText?: Maybe<Scalars['String']>;
}

export interface Invite {
  __typename: 'Invite';
  appsFlyerAppInviteOneLinkId?: Maybe<Scalars['String']>;
  bodyTemplate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  energyDealCallToAction?: Maybe<CallToAction>;
  imgAnimationUrl?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  inviteButtonText?: Maybe<Scalars['String']>;
  inviteInfoScreen?: Maybe<InviteInfoScreen>;
  invites?: Maybe<Array<Maybe<InviteItem>>>;
  registerInvitorButtonText?: Maybe<Scalars['String']>;
  registerInvitorScreen?: Maybe<InviteRegisterScreen>;
  siteTitle?: Maybe<Scalars['String']>;
  tablePlaceholderText?: Maybe<Scalars['String']>;
  thankYouDescription?: Maybe<Scalars['String']>;
  thankYouTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface InviteInfoScreen {
  __typename: 'InviteInfoScreen';
  bullets?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonText?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface InviteItem {
  __typename: 'InviteItem';
  creditBalanceText?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  statusText?: Maybe<Scalars['String']>;
}

export interface InviteRegisterScreen {
  __typename: 'InviteRegisterScreen';
  buttonText?: Maybe<Scalars['String']>;
  codePlaceholder?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Invoice {
  __typename: 'Invoice';
  bankAccount?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  meteringPointId?: Maybe<Scalars['String']>;
  no?: Maybe<Scalars['String']>;
  payment?: Maybe<InvoicePayment>;
  paymentReference?: Maybe<Scalars['String']>;
  pdfUrl?: Maybe<Scalars['String']>;
  sections?: Maybe<Array<Maybe<InvoiceSection>>>;
  showManualPaymentReferences?: Maybe<Scalars['Boolean']>;
  timeZone?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  totalCost?: Maybe<Scalars['Float']>;
  totalCostLocalized?: Maybe<Scalars['String']>;
  totalEnergyConsumption?: Maybe<Scalars['Float']>;
  totalEnergyConsumptionLocalized?: Maybe<Scalars['String']>;
  totalVat?: Maybe<Scalars['Float']>;
  totalVatLocalized?: Maybe<Scalars['String']>;
  vatIsIncluded?: Maybe<Scalars['Boolean']>;
  vatPercent?: Maybe<Scalars['Float']>;
  vatPercentLocalized?: Maybe<Scalars['String']>;
}

export interface InvoicePayment {
  __typename: 'InvoicePayment';
  creditCard?: Maybe<CreditCard>;
  date?: Maybe<Scalars['String']>;
  failureText?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
}

export interface InvoiceSection {
  __typename: 'InvoiceSection';
  consumption?: Maybe<Scalars['Float']>;
  consumptionLocalized?: Maybe<Scalars['String']>;
  consumptionUnit?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  costLocalized?: Maybe<Scalars['String']>;
  costUnit?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceLocalized?: Maybe<Scalars['String']>;
  priceUnit?: Maybe<Scalars['String']>;
  subText?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export interface Light {
  __typename: 'Light';
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  state?: Maybe<LightState>;
}

export interface LightGroup {
  __typename: 'LightGroup';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface Lighting {
  __typename: 'Lighting';
  groups?: Maybe<Array<Maybe<LightGroup>>>;
  lights?: Maybe<Array<Maybe<Light>>>;
  mainScreen?: Maybe<LightingMainScreen>;
}

export interface LightingMainScreen {
  __typename: 'LightingMainScreen';
  description?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface LightState {
  __typename: 'LightState';
  bri?: Maybe<Scalars['Float']>;
  on?: Maybe<Scalars['Boolean']>;
}

export interface Me {
  __typename: 'Me';
  about?: Maybe<About>;
  account?: Maybe<Account>;
  appState?: Maybe<AppState>;
  electricVehicleConsumption?: Maybe<ElectricVehicleConsumption>;
  electricVehicleConsumptionMonths?: Maybe<
    Array<Maybe<ElectricVehicleConsumptionMonth>>
  >;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  home?: Maybe<Home>;
  homes?: Maybe<Array<Maybe<Home>>>;
  id?: Maybe<Scalars['ID']>;
  /** @deprecated Moved to home level. */
  invite?: Maybe<Invite>;
  items?: Maybe<Array<Maybe<SettingsItem>>>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  myVehicles?: Maybe<MyVehicles>;
  pushNotifications?: Maybe<Array<Maybe<PushNotification>>>;
  ssn?: Maybe<Scalars['String']>;
  subscribableNotifications?: Maybe<Array<Maybe<SubscribableNotification>>>;
  tone?: Maybe<Scalars['String']>;
  wallet?: Maybe<Wallet>;
  welcomeGreeting?: Maybe<Greeting>;
}

export interface MeHomeArgs {
  id?: Maybe<Scalars['String']>;
}

export interface MeElectricVehicleConsumptionMonthsArgs {
  id?: Maybe<Scalars['String']>;
}

export interface MeElectricVehicleConsumptionArgs {
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}

export interface MeMutation {
  __typename: 'MeMutation';
  addDeviceToken?: Maybe<GqlMutationGeneralResponse>;
  addVehicle?: Maybe<AddVehicleResult>;
  home?: Maybe<HomeMutation>;
  registerInvitor?: Maybe<GqlMutationGeneralResponse>;
  registerInvitorWithCode?: Maybe<GqlMutationGeneralResponse>;
  removeDeviceToken?: Maybe<GqlMutationGeneralResponse>;
  removeVehicle?: Maybe<AddVehicleResult>;
  setPushNotificationsAsRead?: Maybe<GqlMutationGeneralResponse>;
  subscribeForNotification?: Maybe<GqlMutationGeneralResponse>;
  unsubscribeForNotification?: Maybe<GqlMutationGeneralResponse>;
  update?: Maybe<Me>;
  updateAppState?: Maybe<GqlMutationGeneralResponse>;
  updateVehicle?: Maybe<AddVehicleResult>;
}

export interface MeMutationUpdateArgs {
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  settings?: Maybe<Array<Maybe<SettingsItemInput>>>;
}

export interface MeMutationHomeArgs {
  id?: Maybe<Scalars['String']>;
}

export interface MeMutationUpdateAppStateArgs {
  state?: Maybe<AppStateMutation>;
}

export interface MeMutationRegisterInvitorArgs {
  invitorCustomerId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
}

export interface MeMutationRegisterInvitorWithCodeArgs {
  code?: Maybe<Scalars['String']>;
}

export interface MeMutationAddDeviceTokenArgs {
  token?: Maybe<Scalars['String']>;
}

export interface MeMutationRemoveDeviceTokenArgs {
  token?: Maybe<Scalars['String']>;
}

export interface MeMutationSubscribeForNotificationArgs {
  channel?: Maybe<Scalars['String']>;
  notificationId?: Maybe<Scalars['String']>;
}

export interface MeMutationUnsubscribeForNotificationArgs {
  channel?: Maybe<Scalars['String']>;
  notificationId?: Maybe<Scalars['String']>;
}

export interface MeMutationSetPushNotificationsAsReadArgs {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface MeMutationAddVehicleArgs {
  modelId?: Maybe<Scalars['String']>;
}

export interface MeMutationRemoveVehicleArgs {
  id?: Maybe<Scalars['String']>;
}

export interface MeMutationUpdateVehicleArgs {
  id?: Maybe<Scalars['String']>;
  settings?: Maybe<Array<Maybe<SettingsItemInput>>>;
}

export interface Message {
  __typename: 'Message';
  callToAction?: Maybe<CallToAction>;
  description?: Maybe<Scalars['String']>;
  dismissButtonText?: Maybe<Scalars['String']>;
  iconSrc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Mutation {
  __typename: 'Mutation';
  me?: Maybe<MeMutation>;
}

export interface MyVehicle {
  __typename: 'MyVehicle';
  description?: Maybe<Scalars['String']>;
  detailsScreen?: Maybe<VehicleDetailsScreen>;
  id?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface MyVehicles {
  __typename: 'MyVehicles';
  addScreen?: Maybe<MyVehiclesAddScreen>;
  mainScreen?: Maybe<MyVehiclesMainScreen>;
  vehicles?: Maybe<Array<Maybe<MyVehicle>>>;
}

export interface MyVehiclesAddScreen {
  __typename: 'MyVehiclesAddScreen';
  addAlert?: Maybe<Alert>;
  brandTitle?: Maybe<Scalars['String']>;
  brands?: Maybe<Array<Maybe<VehicleBrand>>>;
  modelTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface MyVehiclesMainScreen {
  __typename: 'MyVehiclesMainScreen';
  addButton?: Maybe<Button>;
  description?: Maybe<Scalars['String']>;
  emptyState?: Maybe<EmptyState>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface NotificationChannel {
  __typename: 'NotificationChannel';
  channelType?: Maybe<Scalars['String']>;
  subscribing?: Maybe<Scalars['Boolean']>;
}

export interface PairableDevice {
  __typename: 'PairableDevice';
  credentials?: Maybe<PairableDeviceCredentials>;
  description?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<PairableDeviceFeature>>>;
  featuresDescription?: Maybe<Scalars['String']>;
  featuresTitle?: Maybe<Scalars['String']>;
  isPaired?: Maybe<Scalars['Boolean']>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  logoImgUrl?: Maybe<Scalars['String']>;
  oauth?: Maybe<PairableDeviceOAuth>;
  pairButtonText?: Maybe<Scalars['String']>;
  pairedDevices?: Maybe<Array<Maybe<PairableDevicePairDevice>>>;
  readMoreUrl?: Maybe<Scalars['String']>;
  readmoreButtonText?: Maybe<Scalars['String']>;
  /** @deprecated unused */
  readmoreLinkText?: Maybe<Scalars['String']>;
  recommendedText?: Maybe<Scalars['String']>;
  showcaseImgUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  showcaseTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unpairButtonText?: Maybe<Scalars['String']>;
}

export interface PairableDeviceCredentials {
  __typename: 'PairableDeviceCredentials';
  description?: Maybe<Scalars['String']>;
  disclaimerText?: Maybe<Scalars['String']>;
  disclaimerUrl?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
}

export interface PairableDeviceFeature {
  __typename: 'PairableDeviceFeature';
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
  valueText?: Maybe<Scalars['String']>;
}

export interface PairableDeviceOAuth {
  __typename: 'PairableDeviceOAuth';
  redirectUriStartsWith?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface PairableDevicePairDevice {
  __typename: 'PairableDevicePairDevice';
  deviceId?: Maybe<Scalars['String']>;
}

export interface PairDeviceResult {
  __typename: 'PairDeviceResult';
  description?: Maybe<Scalars['String']>;
  electricVehicles?: Maybe<Array<Maybe<ElectricVehicle>>>;
  error?: Maybe<ErrorResponse>;
  evChargers?: Maybe<Array<Maybe<EvCharger>>>;
  inverters?: Maybe<Array<Maybe<Inverter>>>;
  sensors?: Maybe<Array<Maybe<Sensor>>>;
  thermostats?: Maybe<Array<Maybe<Thermostat>>>;
  title?: Maybe<Scalars['String']>;
}

export interface PairedEv {
  __typename: 'PairedEv';
  id?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface PaymentMethod {
  __typename: 'PaymentMethod';
  method: Scalars['String'];
  properties?: Maybe<Scalars['DynamicType']>;
  status: Scalars['String'];
}

export interface Powerup {
  __typename: 'Powerup';
  description?: Maybe<Scalars['String']>;
  faqUrl?: Maybe<Scalars['String']>;
  inviteCallToAction?: Maybe<CallToAction>;
  items?: Maybe<Array<Maybe<PowerupItem>>>;
  title?: Maybe<Scalars['String']>;
}

export interface PowerupItem {
  __typename: 'PowerupItem';
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImgUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  isBeta?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  pairableDevice?: Maybe<PairableDevice>;
  /** @deprecated Deprecated 2019-02-26 */
  secondaryImgUrl?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface PreLiveComparison {
  __typename: 'PreLiveComparison';
  basedOnActuals?: Maybe<Scalars['Boolean']>;
  homeId?: Maybe<Scalars['String']>;
  previousYear?: Maybe<Comparison>;
  previousYearMonths?: Maybe<Array<Maybe<Comparison>>>;
}

export interface PriceRating {
  __typename: 'PriceRating';
  colorOffsets?: Maybe<PriceRatingColorOffset>;
  currency?: Maybe<Scalars['String']>;
  entries?: Maybe<Array<Maybe<PriceRatingEntry>>>;
  entriesAvgEnergy?: Maybe<Scalars['Float']>;
  entriesAvgTotal?: Maybe<Scalars['Float']>;
  maxEnergy?: Maybe<Scalars['Float']>;
  maxTotal?: Maybe<Scalars['Float']>;
  minEnergy?: Maybe<Scalars['Float']>;
  minTotal?: Maybe<Scalars['Float']>;
}

export interface PriceRatingColorOffset {
  __typename: 'PriceRatingColorOffset';
  fullGreenPercent?: Maybe<Scalars['Float']>;
  fullRedPercent?: Maybe<Scalars['Float']>;
  fullYellowPercent?: Maybe<Scalars['Float']>;
}

export interface PriceRatingEntry {
  __typename: 'PriceRatingEntry';
  difference?: Maybe<Scalars['Float']>;
  energy?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['String']>;
  timeText?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
}

export interface PriceRatingRoot {
  __typename: 'PriceRatingRoot';
  daily?: Maybe<PriceRating>;
  hourly?: Maybe<PriceRating>;
  isAvailable?: Maybe<Scalars['Boolean']>;
  latest12MonthText?: Maybe<Scalars['String']>;
  latest30DaysText?: Maybe<Scalars['String']>;
  monthly?: Maybe<PriceRating>;
  tomorrowAvgEnergy?: Maybe<Scalars['Float']>;
  tomorrowAvgTotal?: Maybe<Scalars['Float']>;
  tomorrowText?: Maybe<Scalars['String']>;
  useTotalAsDefault?: Maybe<Scalars['Boolean']>;
  useTotalIsConfigurable?: Maybe<Scalars['Boolean']>;
  useTotalText?: Maybe<Scalars['String']>;
  yesterdayAvgEnergy?: Maybe<Scalars['Float']>;
  yesterdayAvgTotal?: Maybe<Scalars['Float']>;
  yesterdayText?: Maybe<Scalars['String']>;
}

export interface ProcessStep {
  __typename: 'ProcessStep';
  description?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Producer {
  __typename: 'Producer';
  bullets?: Maybe<Array<Maybe<ProducerBullet>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageSrc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ProducerBullet {
  __typename: 'ProducerBullet';
  description?: Maybe<Scalars['String']>;
  readMoreUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Production {
  __typename: 'Production';
  annualValues?: Maybe<Array<Maybe<ProductionValue>>>;
  currency?: Maybe<Scalars['String']>;
  dailyValues?: Maybe<Array<Maybe<ProductionValue>>>;
  energyCost?: Maybe<Scalars['Float']>;
  highestResolution?: Maybe<ConsumptionResolution>;
  hourlyValues?: Maybe<Array<Maybe<ProductionValue>>>;
  latestTransactionTimestamp?: Maybe<Scalars['String']>;
  monthlyValues?: Maybe<Array<Maybe<ProductionValue>>>;
  timeZone?: Maybe<Scalars['String']>;
  totalConsumption?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
  valuesFrom?: Maybe<Scalars['String']>;
  valuesTo?: Maybe<Scalars['String']>;
  weeklyValues?: Maybe<Array<Maybe<ProductionValue>>>;
}

export interface ProductionMonth {
  __typename: 'ProductionMonth';
  cost?: Maybe<Scalars['Float']>;
  costText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  kwh?: Maybe<Scalars['Float']>;
  kwhText?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
}

export interface ProductionValue {
  __typename: 'ProductionValue';
  consumption?: Maybe<Scalars['Float']>;
  consumptionEntries?: Maybe<Scalars['Int']>;
  consumptionUnit?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  totalCost?: Maybe<Scalars['Float']>;
  unitCost?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitPriceVAT?: Maybe<Scalars['Float']>;
}

export interface Pulse {
  __typename: 'Pulse';
  alert?: Maybe<Alert>;
  energyDealAlert?: Maybe<CallToActionAlert>;
  estimatedMeasurementsPerMinute?: Maybe<Scalars['Float']>;
  /** @deprecated Not able to dermine if true */
  hasProduction?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isAlive?: Maybe<Scalars['Boolean']>;
  loadBalancingScreen?: Maybe<PulseLoadBalancingScreen>;
  loadBalancingSettingsScreen?: Maybe<PulseLoadBalancingSettingsScreen>;
  mainScreen?: Maybe<PulseMainScreen>;
  name?: Maybe<Scalars['String']>;
  settings?: Maybe<PulseSettings>;
  shortName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export interface PulseLoadBalancingScreen {
  __typename: 'PulseLoadBalancingScreen';
  description?: Maybe<Scalars['String']>;
  mainFuseDangerPercent?: Maybe<Scalars['Int']>;
  settingsButton?: Maybe<Button>;
  siteTitle?: Maybe<Scalars['String']>;
  tabHighestText?: Maybe<Scalars['String']>;
  tabNowText?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface PulseLoadBalancingSettingsScreen {
  __typename: 'PulseLoadBalancingSettingsScreen';
  loadBalancingDescription?: Maybe<Scalars['String']>;
  loadBalancingEnabled?: Maybe<Scalars['Boolean']>;
  loadBalancingTitle?: Maybe<Scalars['String']>;
  mainFuseDescription?: Maybe<Scalars['String']>;
  mainFuseRange?: Maybe<IntRange>;
  mainFuseTitle?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface PulseMainScreen {
  __typename: 'PulseMainScreen';
  tabConsumptionText?: Maybe<Scalars['String']>;
  tabPhaseText?: Maybe<Scalars['String']>;
}

export interface PulseMeasurement {
  __typename: 'PulseMeasurement';
  accumulatedConsumption?: Maybe<Scalars['Float']>;
  accumulatedCost?: Maybe<Scalars['Float']>;
  accumulatedProduction?: Maybe<Scalars['Float']>;
  accumulatedReward?: Maybe<Scalars['Float']>;
  averagePower?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  currentPhase1?: Maybe<Scalars['Float']>;
  currentPhase2?: Maybe<Scalars['Float']>;
  currentPhase3?: Maybe<Scalars['Float']>;
  maxPower?: Maybe<Scalars['Float']>;
  maxPowerProduction?: Maybe<Scalars['Float']>;
  minPower?: Maybe<Scalars['Float']>;
  minPowerProduction?: Maybe<Scalars['Float']>;
  power?: Maybe<Scalars['Float']>;
  powerFactor?: Maybe<Scalars['Float']>;
  powerProduction?: Maybe<Scalars['Float']>;
  signalStrength?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
  voltagePhase1?: Maybe<Scalars['Float']>;
  voltagePhase2?: Maybe<Scalars['Float']>;
  voltagePhase3?: Maybe<Scalars['Float']>;
}

export interface PulseMutation {
  __typename: 'PulseMutation';
  setSettings?: Maybe<Pulse>;
}

export interface PulseMutationSetSettingsArgs {
  loadBalancingOn?: Maybe<Scalars['Boolean']>;
  mainFuseSize?: Maybe<Scalars['Int']>;
}

export interface PulsePairConfig {
  __typename: 'PulsePairConfig';
  baseUrl?: Maybe<Scalars['String']>;
  caCert?: Maybe<Scalars['String']>;
  certificate?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  mqttTopic?: Maybe<Scalars['String']>;
  mqttTopicSub?: Maybe<Scalars['String']>;
  mqttUrl?: Maybe<Scalars['String']>;
  privateKey?: Maybe<Scalars['String']>;
  requiresReset?: Maybe<Scalars['Boolean']>;
  ssid?: Maybe<Scalars['String']>;
  updateUrl?: Maybe<Scalars['String']>;
}

export interface PulsePairStatus {
  __typename: 'PulsePairStatus';
  status?: Maybe<Scalars['String']>;
}

export interface PulseSettings {
  __typename: 'PulseSettings';
  loadBalancingOn?: Maybe<Scalars['Boolean']>;
  mainFuseSize?: Maybe<Scalars['Int']>;
}

export interface PushNotification {
  __typename: 'PushNotification';
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename: 'Query';
  me?: Maybe<Me>;
}

export interface Report {
  __typename: 'Report';
  avatar?: Maybe<Scalars['String']>;
  efficiency?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<ReportCell>>>;
  month?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
}

export interface ReportCell {
  __typename: 'ReportCell';
  description?: Maybe<Scalars['String']>;
  imageSrc?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['DynamicType']>;
  style?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
}

export interface ReportRoot {
  __typename: 'ReportRoot';
  reports?: Maybe<Array<Maybe<Report>>>;
}

export enum Resolution {
  Annual = 'annual',
  Monthly = 'monthly',
}

export interface Sensor {
  __typename: 'Sensor';
  hasHistory?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated */
  idDeprecated?: Maybe<Scalars['String']>;
  measurement?: Maybe<ThermostatMeasurement>;
}

export interface SensorHistory {
  __typename: 'SensorHistory';
  description?: Maybe<Scalars['String']>;
  sensorId?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<SensorHistoryValue>>>;
}

export interface SensorHistoryValue {
  __typename: 'SensorHistoryValue';
  timestamp?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueText?: Maybe<Scalars['String']>;
}

export interface Setting {
  __typename: 'Setting';
  inputOptions?: Maybe<SettingsItemInputOptions>;
  isReadOnly?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['DynamicType']>;
  valueIsArray?: Maybe<Scalars['Boolean']>;
  valueType?: Maybe<SettingValue>;
}

export enum SettingItemType {
  Header = 'header',
  Footer = 'footer',
  Separator = 'separator',
  Setting = 'setting',
  Link = 'link',
}

export interface SettingsItem {
  __typename: 'SettingsItem';
  callToAction?: Maybe<CallToAction>;
  dependsOnSetting?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  setting?: Maybe<Setting>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<SettingItemType>;
  valueText?: Maybe<Scalars['String']>;
}

export interface SettingsItemInput {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['SettingsItemInputValue']>;
}

export interface SettingsItemInputOptions {
  __typename: 'SettingsItemInputOptions';
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stringValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated moved to stringValues */
  textValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitText?: Maybe<Scalars['String']>;
}

export enum SettingValue {
  String = 'string',
  Boolean = 'boolean',
  Int = 'int',
  Double = 'double',
  Time = 'time',
  Date = 'date',
  DateTime = 'date_time',
}

export interface SettlementMethod {
  __typename: 'SettlementMethod';
  method?: Maybe<Scalars['String']>;
  validFrom?: Maybe<Scalars['String']>;
}

export interface SignupStatus {
  __typename: 'SignupStatus';
  avatarStep?: Maybe<ProcessStep>;
  feedStep?: Maybe<ProcessStep>;
  steps?: Maybe<Array<Maybe<ProcessStep>>>;
}

export interface SubscribableNotification {
  __typename: 'SubscribableNotification';
  channels?: Maybe<Array<Maybe<NotificationChannel>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Subscription {
  __typename: 'Subscription';
  billingRegionId?: Maybe<Scalars['Int']>;
  energyDeal?: Maybe<EnergyDeal>;
  id: Scalars['ID'];
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  priceRating?: Maybe<PriceRatingRoot>;
  status: Scalars['String'];
  validFrom?: Maybe<Scalars['String']>;
  validTo?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['ID']>;
}

export interface Thermostat {
  __typename: 'Thermostat';
  brandName?: Maybe<Scalars['String']>;
  capabilities?: Maybe<Array<Maybe<ThermostatCapability>>>;
  connectivity?: Maybe<Scalars['String']>;
  faqUrl?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated */
  hasSettings?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  /** @deprecated Moved to temperature and setpoint sensor. */
  measurements?: Maybe<ThermostatMeasurements>;
  modes?: Maybe<Array<Maybe<ThermostatMode>>>;
  name?: Maybe<Scalars['String']>;
  schedule?: Maybe<DayNightSchedule>;
  setPointSensor?: Maybe<Sensor>;
  state?: Maybe<ThermostatState>;
  supportsAwayMode?: Maybe<Scalars['Boolean']>;
  /** @deprecated Moved to schedule */
  supportsDayNightSchedule?: Maybe<Scalars['Boolean']>;
  temperatureSensor?: Maybe<Sensor>;
  template?: Maybe<Scalars['String']>;
}

export interface ThermostatCapability {
  __typename: 'ThermostatCapability';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Scalars['DynamicType']>;
}

export interface ThermostatMeasurement {
  __typename: 'ThermostatMeasurement';
  description?: Maybe<Scalars['String']>;
  descriptionLong?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeText?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueText?: Maybe<Scalars['String']>;
}

export interface ThermostatMeasurements {
  __typename: 'ThermostatMeasurements';
  display?: Maybe<Array<Maybe<ThermostatMeasurement>>>;
  temperature?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
}

export interface ThermostatMode {
  __typename: 'ThermostatMode';
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
}

export interface ThermostatMutation {
  __typename: 'ThermostatMutation';
  setName?: Maybe<Scalars['Boolean']>;
  setSchedule?: Maybe<GqlMutationGeneralResponse>;
  setState?: Maybe<Scalars['Boolean']>;
}

export interface ThermostatMutationSetStateArgs {
  comfortTemperature?: Maybe<Scalars['Float']>;
  fanLevel?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  onOff?: Maybe<Scalars['String']>;
}

export interface ThermostatMutationSetNameArgs {
  name?: Maybe<Scalars['String']>;
}

export interface ThermostatMutationSetScheduleArgs {
  comfortWeight: Scalars['Int'];
  day: DayNightScheduleSettingsInput;
  enablePriceOptimization: Scalars['Boolean'];
  night: DayNightScheduleSettingsInput;
}

export interface ThermostatState {
  __typename: 'ThermostatState';
  comfortTemperature?: Maybe<Scalars['Float']>;
  fanLevel?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  onOff?: Maybe<Scalars['String']>;
}

export interface VehicleBrand {
  __typename: 'VehicleBrand';
  imgUrl?: Maybe<Scalars['String']>;
  isPairable?: Maybe<Scalars['Boolean']>;
  models?: Maybe<Array<Maybe<VehicleModel>>>;
  name?: Maybe<Scalars['String']>;
  pairingScreen?: Maybe<VehiclePairingScreen>;
}

export interface VehicleDetailsScreen {
  __typename: 'VehicleDetailsScreen';
  items?: Maybe<Array<Maybe<SettingsItem>>>;
  removeAlert?: Maybe<Alert>;
  removeButton?: Maybe<Button>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface VehicleModel {
  __typename: 'VehicleModel';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface VehiclePairingScreen {
  __typename: 'VehiclePairingScreen';
  credentials?: Maybe<PairableDeviceCredentials>;
  deviceType?: Maybe<Scalars['String']>;
  oauth?: Maybe<PairableDeviceOAuth>;
  siteTitle?: Maybe<Scalars['String']>;
}

export interface Wallet {
  __typename: 'Wallet';
  directDebitToPromote?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  paymentMethods: Array<Maybe<PaymentMethod>>;
}

export interface Weather {
  __typename: 'Weather';
  entries?: Maybe<Array<Maybe<WeatherEntry>>>;
  maxTemperature?: Maybe<Scalars['Float']>;
  minTemperature?: Maybe<Scalars['Float']>;
}

export interface WeatherEntry {
  __typename: 'WeatherEntry';
  /** percent (0 - 100) */
  cloudiness?: Maybe<Scalars['Float']>;
  fog?: Maybe<Scalars['Float']>;
  /** mm */
  precipitation?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  time: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  /** meter per second */
  windGust?: Maybe<Scalars['Float']>;
  /** meter per second */
  windSpeed?: Maybe<Scalars['Float']>;
}

export interface WifiScanRecord {
  __typename: 'WifiScanRecord';
  open?: Maybe<Scalars['Boolean']>;
  rssi?: Maybe<Scalars['Float']>;
  ssid?: Maybe<Scalars['String']>;
}

export interface YAxis {
  __typename: 'YAxis';
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
}

export type GetWeatherQueryVariables = {};

export type GetWeatherQuery = {
  me?: Maybe<
    {__typename: 'Me'} & {
      home?: Maybe<
        {__typename: 'Home'} & {
          weather?: Maybe<
            {__typename: 'Weather'} & Pick<
              Weather,
              'minTemperature' | 'maxTemperature'
            > & {
                entries?: Maybe<
                  Array<
                    Maybe<
                      {__typename: 'WeatherEntry'} & Pick<
                        WeatherEntry,
                        'time' | 'temperature' | 'type'
                      >
                    >
                  >
                >;
              }
          >;
        }
      >;
    }
  >;
} & {__typename: 'Query'};

export const GetWeatherDocument = gql`
  query GetWeather {
    me {
      home(id: "a8c210fc-2988-4f06-9fe9-ab1bad9529d5") {
        weather {
          minTemperature
          maxTemperature
          entries {
            time
            temperature
            type
          }
        }
      }
    }
  }
`;
export type GetWeatherComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetWeatherQuery,
    GetWeatherQueryVariables
  >,
  'query'
>;

export const GetWeatherComponent = (props: GetWeatherComponentProps) => (
  <ApolloReactComponents.Query<GetWeatherQuery, GetWeatherQueryVariables>
    query={GetWeatherDocument}
    {...props}
  />
);

export type GetWeatherProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetWeatherQuery,
  GetWeatherQueryVariables
> &
  TChildProps;
export function withGetWeather<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetWeatherQuery,
    GetWeatherQueryVariables,
    GetWeatherProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetWeatherQuery,
    GetWeatherQueryVariables,
    GetWeatherProps<TChildProps>
  >(GetWeatherDocument, {
    alias: 'getWeather',
    ...operationOptions,
  });
}
export type GetWeatherQueryResult = ApolloReactCommon.QueryResult<
  GetWeatherQuery,
  GetWeatherQueryVariables
>;
