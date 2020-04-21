import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DynamicType: any;
  WeekDay: any;
  SettingsItemInputValue: any;
  ProfileQuestionInput: any;
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
  siteTitle?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<AccountItem>>>;
}

export interface AccountItem {
   __typename: 'AccountItem';
  title?: Maybe<Scalars['String']>;
  titleColor?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  subTitleColor?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  callToAction?: Maybe<CallToAction>;
}

export interface Address {
   __typename: 'Address';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  addressText?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  postalCode: Scalars['String'];
  /** ISO 3166-1 alpha-2 */
  country: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  solar?: Maybe<Astronomy>;
  astronomy?: Maybe<Astronomy>;
}

export interface AddVehicleResult {
   __typename: 'AddVehicleResult';
  vehicles?: Maybe<Array<Maybe<MyVehicle>>>;
  error?: Maybe<ErrorResponse>;
}

export interface Alert {
   __typename: 'Alert';
  imgUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** @deprecated Moved to description */
  message?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  okText?: Maybe<Scalars['String']>;
  cancelText?: Maybe<Scalars['String']>;
}

export interface AppState {
   __typename: 'AppState';
  journey?: Maybe<AppStateJourney>;
  frontScreens?: Maybe<Array<Maybe<AppStateFronScreen>>>;
}

export interface AppStateFronScreen {
   __typename: 'AppStateFronScreen';
  homeId?: Maybe<Scalars['String']>;
  bubbles?: Maybe<Array<Maybe<Scalars['String']>>>;
  bubblesSortOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface AppStateFronScreenMutation {
  homeId?: Maybe<Scalars['String']>;
  bubbles?: Maybe<Array<Maybe<Scalars['String']>>>;
  bubblesSortOrder?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface AppStateJourney {
   __typename: 'AppStateJourney';
  hasVisitedPairDevices?: Maybe<Scalars['Boolean']>;
  hasVisitedDeviceList?: Maybe<Scalars['Boolean']>;
}

export interface AppStateJourneyMutation {
  hasVisitedPairDevices?: Maybe<Scalars['Boolean']>;
  hasVisitedDeviceList?: Maybe<Scalars['Boolean']>;
}

export interface AppStateMutation {
  journey?: Maybe<AppStateJourneyMutation>;
  frontScreens?: Maybe<Array<Maybe<AppStateFronScreenMutation>>>;
}

export interface Astronomy {
   __typename: 'Astronomy';
  sunIsUp?: Maybe<Scalars['Boolean']>;
  sunrise?: Maybe<Scalars['String']>;
  sunset?: Maybe<Scalars['String']>;
  moonFraction?: Maybe<Scalars['Float']>;
}

export enum Avatar {
  Floorhouse1 = 'floorhouse1',
  Floorhouse2 = 'floorhouse2',
  Floorhouse3 = 'floorhouse3',
  Castle = 'castle',
  Apartment = 'apartment',
  Cottage = 'cottage',
  Rowhouse = 'rowhouse'
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
  value?: Maybe<Scalars['Float']>;
  valueText?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

export interface Button {
   __typename: 'Button';
  text?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
}

export interface CallToAction {
   __typename: 'CallToAction';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  redirectUrlStartsWith?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
}

export interface CallToActionAlert {
   __typename: 'CallToActionAlert';
  title?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  cancelText?: Maybe<Scalars['String']>;
  callToAction?: Maybe<CallToAction>;
}

export interface ClientSubscription {
   __typename: 'ClientSubscription';
  liveMeasurement?: Maybe<PulseMeasurement>;
  evChargerState?: Maybe<EvCharger>;
}


export interface ClientSubscriptionLiveMeasurementArgs {
  deviceId?: Maybe<Scalars['String']>;
}


export interface ClientSubscriptionEvChargerStateArgs {
  chargerId?: Maybe<Scalars['String']>;
}

export interface Comparison {
   __typename: 'Comparison';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  /** @deprecated Moved to from 2019.11.11 */
  year?: Maybe<Scalars['Int']>;
  /** @deprecated Moved to from 2019.11.11 */
  month?: Maybe<Scalars['Int']>;
  resolution?: Maybe<Scalars['String']>;
  homeEfficency?: Maybe<Scalars['String']>;
  homeEfficencyDescription?: Maybe<Scalars['String']>;
  home?: Maybe<ComparisonData>;
  average?: Maybe<ComparisonData>;
  efficient?: Maybe<ComparisonData>;
}

export interface ComparisonData {
   __typename: 'ComparisonData';
  cost?: Maybe<Scalars['Float']>;
  consumption?: Maybe<Scalars['Float']>;
}

export interface Consumption {
   __typename: 'Consumption';
  annualValues?: Maybe<Scalars['DynamicType']>;
  monthlyValues?: Maybe<Scalars['DynamicType']>;
  weeklyValues?: Maybe<Scalars['DynamicType']>;
  dailyValues?: Maybe<Scalars['DynamicType']>;
  hourlyValues?: Maybe<Scalars['DynamicType']>;
  totalConsumption?: Maybe<Scalars['Float']>;
  energyCost?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  latestTransactionTimestamp?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  highestResolution?: Maybe<ConsumptionResolution>;
  valuesFrom?: Maybe<Scalars['String']>;
  valuesTo?: Maybe<Scalars['String']>;
}

export interface ConsumptionAnalysis {
   __typename: 'ConsumptionAnalysis';
  siteTitle?: Maybe<Scalars['String']>;
  resolutions?: Maybe<Array<Maybe<ConsumptionResolution>>>;
  /** @deprecated Deprecated 19.11.11 */
  defaultResolution?: Maybe<ConsumptionResolution>;
  /** @deprecated Deprecated 19.11.11 */
  firstValueAt?: Maybe<Scalars['String']>;
  valuesFrom?: Maybe<Scalars['String']>;
  valuesTo?: Maybe<Scalars['String']>;
  isPreLive?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<Scalars['String']>;
}

export interface ConsumptionAnalysisItem {
   __typename: 'ConsumptionAnalysisItem';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description2?: Maybe<Scalars['String']>;
  totalConsumptionBubble?: Maybe<Bubble>;
  netConsumptionRow?: Maybe<ConsumptionAnalysisRow>;
  selfConsumptionRow?: Maybe<ConsumptionAnalysisRow>;
  chart?: Maybe<ConsumptionChart>;
  /** @deprecated Deprecated 19.10.31 */
  netConsumptionTitle?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated 19.10.31 */
  netConsumptionBubble?: Maybe<Bubble>;
  /** @deprecated Deprecated 19.10.31 */
  selfConsumptionTitle?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated 19.10.31 */
  selfConsumptionBubble?: Maybe<Bubble>;
}

export interface ConsumptionAnalysisRow {
   __typename: 'ConsumptionAnalysisRow';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
}

export interface ConsumptionChart {
   __typename: 'ConsumptionChart';
  totalConsumptionYAxis?: Maybe<YAxis>;
  totalCostYAxis?: Maybe<YAxis>;
  consumptionUnitText?: Maybe<Scalars['String']>;
  costUnitText?: Maybe<Scalars['String']>;
  priceUnitText?: Maybe<Scalars['String']>;
  itemsDecimalPlaces?: Maybe<Scalars['Int']>;
  displayCostAsDefault?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<ConsumptionChartItem>>>;
  /** @deprecated Moved to totalConsumptionYAxis */
  yMin?: Maybe<Scalars['Float']>;
  /** @deprecated Moved to totalConsumptionYAxis */
  yMax?: Maybe<Scalars['Float']>;
  /** @deprecated Moved to consumptionUnitText & costUnitText */
  unitText?: Maybe<Scalars['String']>;
}

export interface ConsumptionChartItem {
   __typename: 'ConsumptionChartItem';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  fromToText?: Maybe<Scalars['String']>;
  totalConsumption?: Maybe<Scalars['Float']>;
  netConsumption?: Maybe<Scalars['Float']>;
  selfConsumption?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** @deprecated Deprecated 19.11.06 */
  showSelfConsumption?: Maybe<Scalars['Boolean']>;
  isPreLive?: Maybe<Scalars['Boolean']>;
}

export interface ConsumptionMonth {
   __typename: 'ConsumptionMonth';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  kwh?: Maybe<Scalars['Float']>;
  /** @deprecated Only been used in development */
  kwhProduced?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  kwhEstimate?: Maybe<Scalars['Float']>;
  costEstimate?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  consumptionText?: Maybe<Scalars['String']>;
}

export enum ConsumptionResolution {
  Annual = 'annual',
  Monthly = 'monthly',
  Weekly = 'weekly',
  Daily = 'daily',
  Hourly = 'hourly'
}

export interface CreditCard {
   __typename: 'CreditCard';
  brand?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
}

export interface DayNightSchedule {
   __typename: 'DayNightSchedule';
  isSupported?: Maybe<Scalars['Boolean']>;
  day?: Maybe<DayNightScheduleSettings>;
  night?: Maybe<DayNightScheduleSettings>;
  enablePriceOptimization?: Maybe<Scalars['Boolean']>;
  comfortWeight?: Maybe<Scalars['Int']>;
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
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  fixedConsumptionKwh?: Maybe<Scalars['Float']>;
  fixedConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  fixedConsumptionCost?: Maybe<Scalars['Float']>;
  heatingConsumptionKwh?: Maybe<Scalars['Float']>;
  heatingConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  heatingConsumptionCost?: Maybe<Scalars['Float']>;
  behaviorConsumptionKwh?: Maybe<Scalars['Float']>;
  behaviorConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  behaviorConsumptionCost?: Maybe<Scalars['Float']>;
  electricVehicleConsumptionKwh?: Maybe<Scalars['Float']>;
  electricVehicleConsumptionKwhPercent?: Maybe<Scalars['Int']>;
  electricVehicleConsumptionCost?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Int']>;
  totalConsumptionKwh?: Maybe<Scalars['Int']>;
  isValid?: Maybe<Scalars['Boolean']>;
}


export interface ElectricVehicle {
   __typename: 'ElectricVehicle';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['String']>;
  lastSeenText?: Maybe<Scalars['String']>;
  isAlive?: Maybe<Scalars['Boolean']>;
  imgUrl?: Maybe<Scalars['String']>;
  schedule?: Maybe<ElectricVehicleSchedule>;
  battery?: Maybe<ElectricVehicleBattery>;
  batteryText?: Maybe<Scalars['String']>;
  chargingText?: Maybe<Scalars['String']>;
  consumptionText?: Maybe<Scalars['String']>;
  consumptionUnitText?: Maybe<Scalars['String']>;
  energyCostUnitText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleSuspendedText 2019-31-05 */
  scheduleSuspendedText?: Maybe<Scalars['String']>;
  backgroundStyle?: Maybe<ElectricVehicleBackgroundStyle>;
  energyDealCallToAction?: Maybe<CallToAction>;
  faqUrl?: Maybe<Scalars['String']>;
  settingsScreen?: Maybe<ElectricVehicleSettingsScreen>;
  settingsButtonText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  batteryRangeText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingSpeedImgUrl?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingSpeedText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingDoneImgUrl?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  chargingDoneText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  noEnergyDealText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-11-30 */
  scheduleDescription?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertTitle?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertDescription?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertDisableText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertSuspendText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen.scheduleDisableAlert 2019-01-01 */
  scheduleAlertCancelText?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen 2019-01-01 */
  hourTitle?: Maybe<Scalars['String']>;
  /** @deprecated Moved to settingsScreen 2019-01-01 */
  scheduleTitle?: Maybe<Scalars['String']>;
}

export enum ElectricVehicleBackgroundStyle {
  Default = 'default',
  Inactive = 'inactive',
  Saving = 'saving'
}

export interface ElectricVehicleBattery {
   __typename: 'ElectricVehicleBattery';
  percent?: Maybe<Scalars['Int']>;
  percentColor?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-11-30 */
  percentText?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated since 2018-03-05 */
  estimatedRange?: Maybe<Scalars['Float']>;
  /** @deprecated Deprecated since 2018-03-05 */
  estimatedRangeText?: Maybe<Scalars['String']>;
  /** @deprecated Duplication of lastSeen 2019-31-01 */
  timestamp?: Maybe<Scalars['String']>;
  isCharging?: Maybe<Scalars['Boolean']>;
  chargeLimit?: Maybe<Scalars['Int']>;
}

export interface ElectricVehicleConsumption {
   __typename: 'ElectricVehicleConsumption';
  currency?: Maybe<Scalars['String']>;
  homes?: Maybe<Array<Maybe<ElectricVehicleHomeConsumption>>>;
}

export interface ElectricVehicleConsumptionMonth {
   __typename: 'ElectricVehicleConsumptionMonth';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  consumption?: Maybe<Scalars['Float']>;
  consumptionText?: Maybe<Scalars['String']>;
  energyCost?: Maybe<Scalars['Float']>;
  energyCostText?: Maybe<Scalars['String']>;
}

export interface ElectricVehicleConsumptionValue {
   __typename: 'ElectricVehicleConsumptionValue';
  from?: Maybe<Scalars['String']>;
  consumption?: Maybe<Scalars['Float']>;
  energyCost?: Maybe<Scalars['Float']>;
}

export interface ElectricVehicleDisableScheduleAlert {
   __typename: 'ElectricVehicleDisableScheduleAlert';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disableText?: Maybe<Scalars['String']>;
  suspendText?: Maybe<Scalars['String']>;
  cancelText?: Maybe<Scalars['String']>;
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
  isSupported?: Maybe<Scalars['Boolean']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  localTimeTo?: Maybe<Scalars['String']>;
  minBatteryLevel?: Maybe<Scalars['Int']>;
}

export interface ElectricVehicleSettingsScreen {
   __typename: 'ElectricVehicleSettingsScreen';
  /** @deprecated Moved to scheduleButtonText 2019-31-05 */
  openButtonText?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  scheduleTitle?: Maybe<Scalars['String']>;
  scheduleDisableAlert?: Maybe<ElectricVehicleDisableScheduleAlert>;
  scheduleSuspendedText?: Maybe<Scalars['String']>;
  hourTitle?: Maybe<Scalars['String']>;
  minBatteryLevelTitle?: Maybe<Scalars['String']>;
  minBatteryLevelIsSupported?: Maybe<Scalars['Boolean']>;
  chargingCableNotConnectedTitle?: Maybe<Scalars['String']>;
  chargingCableNotConnectedEnabled?: Maybe<Scalars['Boolean']>;
}

export interface EmptyState {
   __typename: 'EmptyState';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
}

export interface EnergyCostDisaggregation {
   __typename: 'EnergyCostDisaggregation';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  /** @deprecated Moved to from 2019.11.11 */
  year?: Maybe<Scalars['Int']>;
  /** @deprecated Moved to from 2019.11.11 */
  month?: Maybe<Scalars['Int']>;
  /** @deprecated Deprecated 2019.11.11 */
  currency?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  totalTitle?: Maybe<Scalars['String']>;
  totalDescription?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<EnergyCostDisaggregationItem>>>;
}

export interface EnergyCostDisaggregationItem {
   __typename: 'EnergyCostDisaggregationItem';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  strokeColor?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
}

export interface EnergyDeal {
   __typename: 'EnergyDeal';
  signupStatus?: Maybe<EnergyDealSignupStatus>;
  currentProducer?: Maybe<Producer>;
}

export interface EnergyDealSignupStatus {
   __typename: 'EnergyDealSignupStatus';
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  completedPct?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  redirectUrlStartsWith?: Maybe<Scalars['String']>;
}

export interface EnergyPriceDisaggregation {
   __typename: 'EnergyPriceDisaggregation';
  from?: Maybe<Scalars['String']>;
  /** @deprecated Moved to from 2019.11.11 */
  year?: Maybe<Scalars['Int']>;
  /** @deprecated Moved to from 2019.11.11 */
  month?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  averagePrice?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<Maybe<EnergyPriceDisaggregationItem>>>;
}

export interface EnergyPriceDisaggregationItem {
   __typename: 'EnergyPriceDisaggregationItem';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  percent?: Maybe<Scalars['Int']>;
  strokeColor?: Maybe<Scalars['String']>;
  costText?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
}

export interface ErrorResponse {
   __typename: 'ErrorResponse';
  statusCode?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['String']>;
  isAlive?: Maybe<Scalars['Boolean']>;
  backgroundStyle?: Maybe<ElectricVehicleBackgroundStyle>;
  img?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  state?: Maybe<EvChargerState>;
  settings?: Maybe<EvChargerSettings>;
  schedule?: Maybe<EvChargerSchedule>;
  mainScreen?: Maybe<EvChargerMainScreen>;
  settingsScreen?: Maybe<EvChargerSettingsScreen>;
}

export interface EvChargerCase {
   __typename: 'EvChargerCase';
  name?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
}

export interface EvChargerMainScreen {
   __typename: 'EvChargerMainScreen';
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  startChargingButton?: Maybe<Button>;
  startChargingAlert?: Maybe<Alert>;
  consumptionText?: Maybe<Scalars['String']>;
  consumptionUnitText?: Maybe<Scalars['String']>;
  energyCostUnitText?: Maybe<Scalars['String']>;
  settingsButton?: Maybe<Button>;
  /** @deprecated Deprecated with permanently settings */
  lockButton?: Maybe<Button>;
  /** @deprecated Deprecated with permanently settings */
  lockButtonAlert?: Maybe<Alert>;
}

export interface EvChargerMutation {
   __typename: 'EvChargerMutation';
  setSettings?: Maybe<EvCharger>;
  setSchedule?: Maybe<EvCharger>;
  setCharging?: Maybe<EvCharger>;
}


export interface EvChargerMutationSetSettingsArgs {
  name?: Maybe<Scalars['String']>;
  caseName?: Maybe<Scalars['String']>;
  maxChargePower?: Maybe<Scalars['Float']>;
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
  wifiScanResult?: Maybe<Array<Maybe<WifiScanRecord>>>;
  pairedEvs?: Maybe<Array<Maybe<PairedEv>>>;
  supportedEvs?: Maybe<Array<Maybe<EvBrand>>>;
  error?: Maybe<ErrorResponse>;
}

export interface EvChargerSchedule {
   __typename: 'EvChargerSchedule';
  isSupported?: Maybe<Scalars['Boolean']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  isSuspended?: Maybe<Scalars['Boolean']>;
  localTimeTo?: Maybe<Scalars['String']>;
}

export interface EvChargerSettings {
   __typename: 'EvChargerSettings';
  name?: Maybe<Scalars['String']>;
  caseName?: Maybe<Scalars['String']>;
  maxChargePower?: Maybe<Scalars['Int']>;
  permanentCableLock?: Maybe<Scalars['Boolean']>;
  loadBalanceMainFuse?: Maybe<Scalars['Boolean']>;
  loadBalanceAdditionalEvChargers?: Maybe<Scalars['Boolean']>;
  /** @deprecated Moved to state */
  chargingCableIsLocked?: Maybe<Scalars['Boolean']>;
}

export interface EvChargerSettingsScreen {
   __typename: 'EvChargerSettingsScreen';
  siteTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  nameTitle?: Maybe<Scalars['String']>;
  scheduleTitle?: Maybe<Scalars['String']>;
  scheduleDisableAlert?: Maybe<ElectricVehicleDisableScheduleAlert>;
  scheduleEnableAlert?: Maybe<CallToActionAlert>;
  scheduleSuspendedText?: Maybe<Scalars['String']>;
  hourTitle?: Maybe<Scalars['String']>;
  maxChargePowerTitle?: Maybe<Scalars['String']>;
  maxChargePowerRange?: Maybe<IntRange>;
  maxChargePowerRates?: Maybe<IntInputValue>;
  permanentCableLockTitle?: Maybe<Scalars['String']>;
  loadBalanceMainFuseTitle?: Maybe<Scalars['String']>;
  loadBalanceMainFuseEnabled?: Maybe<Scalars['Boolean']>;
  loadBalanceMainFuseOn?: Maybe<Scalars['Boolean']>;
  cases?: Maybe<Array<Maybe<EvChargerCase>>>;
  energyDealCallToAction?: Maybe<CallToAction>;
  myVehiclesTitle?: Maybe<Scalars['String']>;
  myVehiclesCount?: Maybe<Scalars['Int']>;
  /** @deprecated deprecated */
  loadBalanceAdditionalEvChargersTitle?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated */
  loadBalanceAdditionalEvChargersIsSupported?: Maybe<Scalars['Boolean']>;
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
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  showUntil?: Maybe<Scalars['String']>;
}

export interface Home {
   __typename: 'Home';
  id?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Avatar>;
  timeZone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  hasEnergyDeal?: Maybe<Scalars['Boolean']>;
  manualMeterReadingIsSupported?: Maybe<Scalars['Boolean']>;
  currentSettlementMethod?: Maybe<SettlementMethod>;
  meteringPointIdFormatted?: Maybe<Scalars['String']>;
  currentMeterNoFormatted?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  subscription?: Maybe<Subscription>;
  /** @deprecated Moved to consumptionAnalysis */
  consumptionReport?: Maybe<ConsumptionAnalysis>;
  consumptionAnalysis?: Maybe<ConsumptionAnalysis>;
  consumptionAnalysisItems?: Maybe<Array<Maybe<ConsumptionAnalysisItem>>>;
  consumptionChart?: Maybe<ConsumptionChart>;
  productionChart?: Maybe<ConsumptionChart>;
  productionAnalysis?: Maybe<ConsumptionAnalysis>;
  productionAnalysisItems?: Maybe<Array<Maybe<ConsumptionAnalysisItem>>>;
  /** @deprecated Moved to consumptionAnalysisItems */
  consumptionReports?: Maybe<Array<Maybe<ConsumptionAnalysisItem>>>;
  /** @deprecated Deprecated. Use consumptionAnalysis instead. */
  consumptionMonths?: Maybe<Array<Maybe<ConsumptionMonth>>>;
  /** @deprecated Deprecated. Use consumption chart instead. */
  consumption?: Maybe<Consumption>;
  preLiveComparison?: Maybe<PreLiveComparison>;
  comparisonAnalysis?: Maybe<ConsumptionAnalysis>;
  comparisonAnalysisItems?: Maybe<Array<Maybe<Comparison>>>;
  /** @deprecated Deprecated. Use comparison analysis instead. */
  comparisons?: Maybe<Array<Maybe<Comparison>>>;
  profileQuestions?: Maybe<Array<Maybe<HomeProfileQuestion>>>;
  temperatures?: Maybe<Array<Maybe<Scalars['DynamicType']>>>;
  signupStatus?: Maybe<SignupStatus>;
  costDisaggregationAnalysis?: Maybe<ConsumptionAnalysis>;
  costDisaggregationAnalysisItems?: Maybe<Array<Maybe<EnergyCostDisaggregation>>>;
  /** @deprecated Deprecated. Use costDisaggregation instead. */
  disaggregation?: Maybe<Array<Maybe<Disaggregation>>>;
  /** @deprecated Deprecated. Use costDisaggregationAnalysis instead. */
  costDisaggregationMonths?: Maybe<Array<Maybe<EnergyCostDisaggregation>>>;
  priceDisaggregationMonths?: Maybe<Array<Maybe<EnergyPriceDisaggregation>>>;
  weather?: Maybe<Weather>;
  awayMode?: Maybe<AwayMode>;
  /** @deprecated Moved to thermostat level. */
  dayNightSchedule?: Maybe<DayNightSchedule>;
  report?: Maybe<ReportRoot>;
  thermostats?: Maybe<Array<Maybe<Thermostat>>>;
  electricVehicles?: Maybe<Array<Maybe<ElectricVehicle>>>;
  electricVehicle?: Maybe<ElectricVehicle>;
  evChargers?: Maybe<Array<Maybe<EvCharger>>>;
  evCharger?: Maybe<EvCharger>;
  evChargerPairConfig?: Maybe<EvChargerPairConfig>;
  evChargerConsumptionMonths?: Maybe<Array<Maybe<ElectricVehicleConsumptionMonth>>>;
  evChargerConsumption?: Maybe<Array<Maybe<ElectricVehicleConsumptionValue>>>;
  sensors?: Maybe<Array<Maybe<Sensor>>>;
  sensorsHistory?: Maybe<Array<Maybe<SensorHistory>>>;
  /** @deprecated Moved to productionAnalysis */
  productionMonths?: Maybe<Array<Maybe<ProductionMonth>>>;
  production?: Maybe<Production>;
  energyDeal?: Maybe<EnergyDeal>;
  powerup?: Maybe<Powerup>;
  invite?: Maybe<Invite>;
  pulse?: Maybe<Pulse>;
  pulsePairConfig?: Maybe<PulsePairConfig>;
  pulsePairStatus?: Maybe<PulsePairStatus>;
  pulseMeasurements?: Maybe<Array<Maybe<PulseMeasurement>>>;
  inverters?: Maybe<Array<Maybe<Inverter>>>;
  inverter?: Maybe<Inverter>;
  inverterProduction?: Maybe<InverterProduction>;
  messages?: Maybe<Array<Maybe<Message>>>;
  lighting?: Maybe<Lighting>;
}


export interface HomeConsumptionReportArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeConsumptionAnalysisArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeConsumptionAnalysisItemsArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeConsumptionChartArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeProductionChartArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeProductionAnalysisArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeProductionAnalysisItemsArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeConsumptionReportsArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
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
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeComparisonsArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeTemperaturesArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeCostDisaggregationAnalysisArgs {
  useDemoData?: Maybe<Scalars['Boolean']>;
}


export interface HomeCostDisaggregationAnalysisItemsArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<ConsumptionResolution>;
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
  id?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
}


export interface HomeProductionArgs {
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}


export interface HomePulsePairConfigArgs {
  pulseCode?: Maybe<Scalars['String']>;
  ignoreImpersonationRestriction?: Maybe<Scalars['Boolean']>;
}


export interface HomePulsePairStatusArgs {
  id?: Maybe<Scalars['String']>;
}


export interface HomePulseMeasurementsArgs {
  id?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}


export interface HomeInverterArgs {
  id?: Maybe<Scalars['String']>;
}


export interface HomeInverterProductionArgs {
  id?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
}

export interface HomeMutation {
   __typename: 'HomeMutation';
  thermostat?: Maybe<ThermostatMutation>;
  electricVehicle?: Maybe<ElectricVehicleMutation>;
  evCharger?: Maybe<EvChargerMutation>;
  pulse?: Maybe<PulseMutation>;
  pairDeviceWithOAuth?: Maybe<PairDeviceResult>;
  pairDeviceWithCredentials?: Maybe<PairDeviceResult>;
  unpairDevices?: Maybe<GqlMutationGeneralResponse>;
  answerProfileQuestions?: Maybe<Array<Maybe<HomeProfileQuestion>>>;
  sendMeterReading?: Maybe<GqlMutationGeneralResponse>;
  setMeteringPointIdAndBindingTime?: Maybe<GqlMutationGeneralResponse>;
  setAwayMode?: Maybe<GqlMutationGeneralResponse>;
  dismissMessage?: Maybe<Array<Maybe<Message>>>;
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
  deviceType?: Maybe<Scalars['String']>;
  authorizationCode?: Maybe<Scalars['String']>;
}


export interface HomeMutationPairDeviceWithCredentialsArgs {
  deviceType?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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
  meteringPointId?: Maybe<Scalars['String']>;
  bindingTime?: Maybe<Scalars['String']>;
  isMovingIn?: Maybe<Scalars['Boolean']>;
}


export interface HomeMutationSetAwayModeArgs {
  isEnabled?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}


export interface HomeMutationDismissMessageArgs {
  id?: Maybe<Scalars['String']>;
}

export interface HomeProfileQuestion {
   __typename: 'HomeProfileQuestion';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  isAnswered?: Maybe<Scalars['Boolean']>;
  propertyName?: Maybe<Scalars['String']>;
  valueType?: Maybe<Scalars['String']>;
  valueIsArray?: Maybe<Scalars['Boolean']>;
  currentValue?: Maybe<Scalars['DynamicType']>;
  currentValueText?: Maybe<Scalars['String']>;
  input?: Maybe<HomeProfileQuestionInput>;
}

export interface HomeProfileQuestionAnswer {
  propertyName?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['ProfileQuestionInput']>;
}

export interface HomeProfileQuestionInput {
   __typename: 'HomeProfileQuestionInput';
  type?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['DynamicType']>;
}

export interface IntInputValue {
   __typename: 'IntInputValue';
  values?: Maybe<Array<Maybe<Scalars['Int']>>>;
  unit?: Maybe<Scalars['String']>;
}

export interface IntRange {
   __typename: 'IntRange';
  min?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Int']>;
  step?: Maybe<Scalars['Int']>;
  defaultValue?: Maybe<Scalars['Int']>;
}

export interface Inverter {
   __typename: 'Inverter';
  id?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['String']>;
  siteTitle?: Maybe<Scalars['String']>;
  bubble?: Maybe<Bubble>;
  description?: Maybe<Scalars['String']>;
  firstProductionValueAt?: Maybe<Scalars['String']>;
  alert?: Maybe<Alert>;
}

export interface InverterProduction {
   __typename: 'InverterProduction';
  keyFigures?: Maybe<Array<Maybe<InverterProductionKeyFigure>>>;
  items?: Maybe<Array<Maybe<InverterProductionItem>>>;
  yAxis?: Maybe<YAxis>;
}

export interface InverterProductionItem {
   __typename: 'InverterProductionItem';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  fromToText?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueText?: Maybe<Scalars['String']>;
}

export interface InverterProductionKeyFigure {
   __typename: 'InverterProductionKeyFigure';
  valueText?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

export interface Invite {
   __typename: 'Invite';
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  imgAnimationUrl?: Maybe<Scalars['String']>;
  bodyTemplate?: Maybe<Scalars['String']>;
  inviteButtonText?: Maybe<Scalars['String']>;
  registerInvitorButtonText?: Maybe<Scalars['String']>;
  energyDealCallToAction?: Maybe<CallToAction>;
  thankYouTitle?: Maybe<Scalars['String']>;
  thankYouDescription?: Maybe<Scalars['String']>;
  tablePlaceholderText?: Maybe<Scalars['String']>;
  appsFlyerAppInviteOneLinkId?: Maybe<Scalars['String']>;
  invites?: Maybe<Array<Maybe<InviteItem>>>;
  inviteInfoScreen?: Maybe<InviteInfoScreen>;
  registerInvitorScreen?: Maybe<InviteRegisterScreen>;
}

export interface InviteInfoScreen {
   __typename: 'InviteInfoScreen';
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  bullets?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonText?: Maybe<Scalars['String']>;
}

export interface InviteItem {
   __typename: 'InviteItem';
  name?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  statusText?: Maybe<Scalars['String']>;
  creditBalanceText?: Maybe<Scalars['String']>;
}

export interface InviteRegisterScreen {
   __typename: 'InviteRegisterScreen';
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  codePlaceholder?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
}

export interface Invoice {
   __typename: 'Invoice';
  id?: Maybe<Scalars['Int']>;
  no?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['String']>;
  totalCost?: Maybe<Scalars['Float']>;
  totalCostLocalized?: Maybe<Scalars['String']>;
  totalEnergyConsumption?: Maybe<Scalars['Float']>;
  totalEnergyConsumptionLocalized?: Maybe<Scalars['String']>;
  totalVat?: Maybe<Scalars['Float']>;
  totalVatLocalized?: Maybe<Scalars['String']>;
  vatPercent?: Maybe<Scalars['Float']>;
  vatPercentLocalized?: Maybe<Scalars['String']>;
  vatIsIncluded?: Maybe<Scalars['Boolean']>;
  meteringPointId?: Maybe<Scalars['String']>;
  paymentReference?: Maybe<Scalars['String']>;
  showManualPaymentReferences?: Maybe<Scalars['Boolean']>;
  bankAccount?: Maybe<Scalars['String']>;
  pdfUrl?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  payment?: Maybe<InvoicePayment>;
  sections?: Maybe<Array<Maybe<InvoiceSection>>>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
}

export interface InvoicePayment {
   __typename: 'InvoicePayment';
  status?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  failureText?: Maybe<Scalars['String']>;
  creditCard?: Maybe<CreditCard>;
}

export interface InvoiceSection {
   __typename: 'InvoiceSection';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  subText?: Maybe<Scalars['String']>;
  consumption?: Maybe<Scalars['Float']>;
  consumptionLocalized?: Maybe<Scalars['String']>;
  consumptionUnit?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  priceLocalized?: Maybe<Scalars['String']>;
  priceUnit?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  costLocalized?: Maybe<Scalars['String']>;
  costUnit?: Maybe<Scalars['String']>;
}

export interface Light {
   __typename: 'Light';
  id?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  state?: Maybe<LightState>;
}

export interface LightGroup {
   __typename: 'LightGroup';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface Lighting {
   __typename: 'Lighting';
  mainScreen?: Maybe<LightingMainScreen>;
  groups?: Maybe<Array<Maybe<LightGroup>>>;
  lights?: Maybe<Array<Maybe<Light>>>;
}

export interface LightingMainScreen {
   __typename: 'LightingMainScreen';
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

export interface LightState {
   __typename: 'LightState';
  on?: Maybe<Scalars['Boolean']>;
  bri?: Maybe<Scalars['Float']>;
}

export interface Me {
   __typename: 'Me';
  id?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  tone?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SettingsItem>>>;
  welcomeGreeting?: Maybe<Greeting>;
  appState?: Maybe<AppState>;
  home?: Maybe<Home>;
  homes?: Maybe<Array<Maybe<Home>>>;
  wallet?: Maybe<Wallet>;
  about?: Maybe<About>;
  /** @deprecated Moved to home level. */
  invite?: Maybe<Invite>;
  electricVehicleConsumptionMonths?: Maybe<Array<Maybe<ElectricVehicleConsumptionMonth>>>;
  electricVehicleConsumption?: Maybe<ElectricVehicleConsumption>;
  subscribableNotifications?: Maybe<Array<Maybe<SubscribableNotification>>>;
  pushNotifications?: Maybe<Array<Maybe<PushNotification>>>;
  account?: Maybe<Account>;
  myVehicles?: Maybe<MyVehicles>;
}


export interface MeHomeArgs {
  id?: Maybe<Scalars['String']>;
}


export interface MeElectricVehicleConsumptionMonthsArgs {
  id?: Maybe<Scalars['String']>;
}


export interface MeElectricVehicleConsumptionArgs {
  id?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['String']>;
}

export interface MeMutation {
   __typename: 'MeMutation';
  update?: Maybe<Me>;
  home?: Maybe<HomeMutation>;
  updateAppState?: Maybe<GqlMutationGeneralResponse>;
  registerInvitor?: Maybe<GqlMutationGeneralResponse>;
  registerInvitorWithCode?: Maybe<GqlMutationGeneralResponse>;
  addDeviceToken?: Maybe<GqlMutationGeneralResponse>;
  removeDeviceToken?: Maybe<GqlMutationGeneralResponse>;
  subscribeForNotification?: Maybe<GqlMutationGeneralResponse>;
  unsubscribeForNotification?: Maybe<GqlMutationGeneralResponse>;
  setPushNotificationsAsRead?: Maybe<GqlMutationGeneralResponse>;
  addVehicle?: Maybe<AddVehicleResult>;
  removeVehicle?: Maybe<AddVehicleResult>;
  updateVehicle?: Maybe<AddVehicleResult>;
}


export interface MeMutationUpdateArgs {
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
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
  notificationId?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
}


export interface MeMutationUnsubscribeForNotificationArgs {
  notificationId?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  iconSrc?: Maybe<Scalars['String']>;
  callToAction?: Maybe<CallToAction>;
  dismissButtonText?: Maybe<Scalars['String']>;
}

export interface Mutation {
   __typename: 'Mutation';
  me?: Maybe<MeMutation>;
}

export interface MyVehicle {
   __typename: 'MyVehicle';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  detailsScreen?: Maybe<VehicleDetailsScreen>;
}

export interface MyVehicles {
   __typename: 'MyVehicles';
  vehicles?: Maybe<Array<Maybe<MyVehicle>>>;
  mainScreen?: Maybe<MyVehiclesMainScreen>;
  addScreen?: Maybe<MyVehiclesAddScreen>;
}

export interface MyVehiclesAddScreen {
   __typename: 'MyVehiclesAddScreen';
  title?: Maybe<Scalars['String']>;
  brandTitle?: Maybe<Scalars['String']>;
  modelTitle?: Maybe<Scalars['String']>;
  brands?: Maybe<Array<Maybe<VehicleBrand>>>;
  addAlert?: Maybe<Alert>;
}

export interface MyVehiclesMainScreen {
   __typename: 'MyVehiclesMainScreen';
  siteTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  addButton?: Maybe<Button>;
  emptyState?: Maybe<EmptyState>;
}

export interface NotificationChannel {
   __typename: 'NotificationChannel';
  channelType?: Maybe<Scalars['String']>;
  subscribing?: Maybe<Scalars['Boolean']>;
}

export interface PairableDevice {
   __typename: 'PairableDevice';
  deviceType?: Maybe<Scalars['String']>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  isPaired?: Maybe<Scalars['Boolean']>;
  pairedDevices?: Maybe<Array<Maybe<PairableDevicePairDevice>>>;
  oauth?: Maybe<PairableDeviceOAuth>;
  credentials?: Maybe<PairableDeviceCredentials>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  recommendedText?: Maybe<Scalars['String']>;
  readmoreButtonText?: Maybe<Scalars['String']>;
  /** @deprecated unused */
  readmoreLinkText?: Maybe<Scalars['String']>;
  pairButtonText?: Maybe<Scalars['String']>;
  unpairButtonText?: Maybe<Scalars['String']>;
  showcaseTitle?: Maybe<Scalars['String']>;
  featuresTitle?: Maybe<Scalars['String']>;
  featuresDescription?: Maybe<Scalars['String']>;
  readMoreUrl?: Maybe<Scalars['String']>;
  logoImgUrl?: Maybe<Scalars['String']>;
  showcaseImgUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  features?: Maybe<Array<Maybe<PairableDeviceFeature>>>;
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
  imgUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  valueText?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

export interface PairableDeviceOAuth {
   __typename: 'PairableDeviceOAuth';
  url?: Maybe<Scalars['String']>;
  redirectUriStartsWith?: Maybe<Scalars['String']>;
}

export interface PairableDevicePairDevice {
   __typename: 'PairableDevicePairDevice';
  deviceId?: Maybe<Scalars['String']>;
}

export interface PairDeviceResult {
   __typename: 'PairDeviceResult';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  thermostats?: Maybe<Array<Maybe<Thermostat>>>;
  sensors?: Maybe<Array<Maybe<Sensor>>>;
  electricVehicles?: Maybe<Array<Maybe<ElectricVehicle>>>;
  evChargers?: Maybe<Array<Maybe<EvCharger>>>;
  inverters?: Maybe<Array<Maybe<Inverter>>>;
  error?: Maybe<ErrorResponse>;
}

export interface PairedEv {
   __typename: 'PairedEv';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
}

export interface PaymentMethod {
   __typename: 'PaymentMethod';
  method: Scalars['String'];
  status: Scalars['String'];
  properties?: Maybe<Scalars['DynamicType']>;
}

export interface Powerup {
   __typename: 'Powerup';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  inviteCallToAction?: Maybe<CallToAction>;
  faqUrl?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PowerupItem>>>;
}

export interface PowerupItem {
   __typename: 'PowerupItem';
  type?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated 2019-02-26 */
  secondaryImgUrl?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImgUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  isBeta?: Maybe<Scalars['Boolean']>;
  pairableDevice?: Maybe<PairableDevice>;
}

export interface PreLiveComparison {
   __typename: 'PreLiveComparison';
  homeId?: Maybe<Scalars['String']>;
  basedOnActuals?: Maybe<Scalars['Boolean']>;
  previousYear?: Maybe<Comparison>;
  previousYearMonths?: Maybe<Array<Maybe<Comparison>>>;
}

export interface PriceRating {
   __typename: 'PriceRating';
  minEnergy?: Maybe<Scalars['Float']>;
  maxEnergy?: Maybe<Scalars['Float']>;
  minTotal?: Maybe<Scalars['Float']>;
  maxTotal?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  colorOffsets?: Maybe<PriceRatingColorOffset>;
  entriesAvgEnergy?: Maybe<Scalars['Float']>;
  entriesAvgTotal?: Maybe<Scalars['Float']>;
  entries?: Maybe<Array<Maybe<PriceRatingEntry>>>;
}

export interface PriceRatingColorOffset {
   __typename: 'PriceRatingColorOffset';
  fullGreenPercent?: Maybe<Scalars['Float']>;
  fullYellowPercent?: Maybe<Scalars['Float']>;
  fullRedPercent?: Maybe<Scalars['Float']>;
}

export interface PriceRatingEntry {
   __typename: 'PriceRatingEntry';
  time?: Maybe<Scalars['String']>;
  timeText?: Maybe<Scalars['String']>;
  energy?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  difference?: Maybe<Scalars['Float']>;
}

export interface PriceRatingRoot {
   __typename: 'PriceRatingRoot';
  isAvailable?: Maybe<Scalars['Boolean']>;
  useTotalIsConfigurable?: Maybe<Scalars['Boolean']>;
  useTotalAsDefault?: Maybe<Scalars['Boolean']>;
  useTotalText?: Maybe<Scalars['String']>;
  tomorrowText?: Maybe<Scalars['String']>;
  yesterdayText?: Maybe<Scalars['String']>;
  latest30DaysText?: Maybe<Scalars['String']>;
  latest12MonthText?: Maybe<Scalars['String']>;
  yesterdayAvgEnergy?: Maybe<Scalars['Float']>;
  yesterdayAvgTotal?: Maybe<Scalars['Float']>;
  tomorrowAvgEnergy?: Maybe<Scalars['Float']>;
  tomorrowAvgTotal?: Maybe<Scalars['Float']>;
  hourly?: Maybe<PriceRating>;
  daily?: Maybe<PriceRating>;
  monthly?: Maybe<PriceRating>;
}

export interface ProcessStep {
   __typename: 'ProcessStep';
  timestamp?: Maybe<Scalars['String']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

export interface Producer {
   __typename: 'Producer';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageSrc?: Maybe<Scalars['String']>;
  bullets?: Maybe<Array<Maybe<ProducerBullet>>>;
}

export interface ProducerBullet {
   __typename: 'ProducerBullet';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  readMoreUrl?: Maybe<Scalars['String']>;
}

export interface Production {
   __typename: 'Production';
  annualValues?: Maybe<Array<Maybe<ProductionValue>>>;
  monthlyValues?: Maybe<Array<Maybe<ProductionValue>>>;
  weeklyValues?: Maybe<Array<Maybe<ProductionValue>>>;
  dailyValues?: Maybe<Array<Maybe<ProductionValue>>>;
  hourlyValues?: Maybe<Array<Maybe<ProductionValue>>>;
  totalConsumption?: Maybe<Scalars['Float']>;
  energyCost?: Maybe<Scalars['Float']>;
  totalCost?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  latestTransactionTimestamp?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  highestResolution?: Maybe<ConsumptionResolution>;
  valuesFrom?: Maybe<Scalars['String']>;
  valuesTo?: Maybe<Scalars['String']>;
}

export interface ProductionMonth {
   __typename: 'ProductionMonth';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  kwh?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  isComplete?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  costText?: Maybe<Scalars['String']>;
  kwhText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}

export interface ProductionValue {
   __typename: 'ProductionValue';
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  unitPriceVAT?: Maybe<Scalars['Float']>;
  consumption?: Maybe<Scalars['Float']>;
  consumptionUnit?: Maybe<Scalars['String']>;
  totalCost?: Maybe<Scalars['Float']>;
  unitCost?: Maybe<Scalars['Float']>;
  quality?: Maybe<Scalars['String']>;
  consumptionEntries?: Maybe<Scalars['Int']>;
}


export interface Pulse {
   __typename: 'Pulse';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  isAlive?: Maybe<Scalars['Boolean']>;
  alert?: Maybe<Alert>;
  estimatedMeasurementsPerMinute?: Maybe<Scalars['Float']>;
  settings?: Maybe<PulseSettings>;
  /** @deprecated Not able to dermine if true */
  hasProduction?: Maybe<Scalars['Boolean']>;
  mainScreen?: Maybe<PulseMainScreen>;
  loadBalancingScreen?: Maybe<PulseLoadBalancingScreen>;
  loadBalancingSettingsScreen?: Maybe<PulseLoadBalancingSettingsScreen>;
  energyDealAlert?: Maybe<CallToActionAlert>;
}

export interface PulseLoadBalancingScreen {
   __typename: 'PulseLoadBalancingScreen';
  siteTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tabNowText?: Maybe<Scalars['String']>;
  tabHighestText?: Maybe<Scalars['String']>;
  mainFuseDangerPercent?: Maybe<Scalars['Int']>;
  settingsButton?: Maybe<Button>;
}

export interface PulseLoadBalancingSettingsScreen {
   __typename: 'PulseLoadBalancingSettingsScreen';
  siteTitle?: Maybe<Scalars['String']>;
  mainFuseTitle?: Maybe<Scalars['String']>;
  mainFuseDescription?: Maybe<Scalars['String']>;
  mainFuseRange?: Maybe<IntRange>;
  loadBalancingTitle?: Maybe<Scalars['String']>;
  loadBalancingDescription?: Maybe<Scalars['String']>;
  loadBalancingEnabled?: Maybe<Scalars['Boolean']>;
}

export interface PulseMainScreen {
   __typename: 'PulseMainScreen';
  tabConsumptionText?: Maybe<Scalars['String']>;
  tabPhaseText?: Maybe<Scalars['String']>;
}

export interface PulseMeasurement {
   __typename: 'PulseMeasurement';
  timestamp?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['Float']>;
  powerProduction?: Maybe<Scalars['Float']>;
  minPower?: Maybe<Scalars['Float']>;
  averagePower?: Maybe<Scalars['Float']>;
  maxPower?: Maybe<Scalars['Float']>;
  minPowerProduction?: Maybe<Scalars['Float']>;
  maxPowerProduction?: Maybe<Scalars['Float']>;
  accumulatedConsumption?: Maybe<Scalars['Float']>;
  accumulatedCost?: Maybe<Scalars['Float']>;
  accumulatedProduction?: Maybe<Scalars['Float']>;
  accumulatedReward?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  currentPhase1?: Maybe<Scalars['Float']>;
  currentPhase2?: Maybe<Scalars['Float']>;
  currentPhase3?: Maybe<Scalars['Float']>;
  voltagePhase1?: Maybe<Scalars['Float']>;
  voltagePhase2?: Maybe<Scalars['Float']>;
  voltagePhase3?: Maybe<Scalars['Float']>;
  powerFactor?: Maybe<Scalars['Float']>;
  signalStrength?: Maybe<Scalars['Int']>;
}

export interface PulseMutation {
   __typename: 'PulseMutation';
  setSettings?: Maybe<Pulse>;
}


export interface PulseMutationSetSettingsArgs {
  mainFuseSize?: Maybe<Scalars['Int']>;
  loadBalancingOn?: Maybe<Scalars['Boolean']>;
}

export interface PulsePairConfig {
   __typename: 'PulsePairConfig';
  deviceId?: Maybe<Scalars['String']>;
  requiresReset?: Maybe<Scalars['Boolean']>;
  ssid?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  updateUrl?: Maybe<Scalars['String']>;
  mqttUrl?: Maybe<Scalars['String']>;
  mqttTopic?: Maybe<Scalars['String']>;
  mqttTopicSub?: Maybe<Scalars['String']>;
  caCert?: Maybe<Scalars['String']>;
  certificate?: Maybe<Scalars['String']>;
  privateKey?: Maybe<Scalars['String']>;
}

export interface PulsePairStatus {
   __typename: 'PulsePairStatus';
  status?: Maybe<Scalars['String']>;
}

export interface PulseSettings {
   __typename: 'PulseSettings';
  mainFuseSize?: Maybe<Scalars['Int']>;
  loadBalancingOn?: Maybe<Scalars['Boolean']>;
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
  title?: Maybe<Scalars['String']>;
  efficiency?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<ReportCell>>>;
}

export interface ReportCell {
   __typename: 'ReportCell';
  type?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  imageSrc?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['DynamicType']>;
}

export interface ReportRoot {
   __typename: 'ReportRoot';
  reports?: Maybe<Array<Maybe<Report>>>;
}

export enum Resolution {
  Annual = 'annual',
  Monthly = 'monthly'
}

export interface Sensor {
   __typename: 'Sensor';
  id?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated */
  idDeprecated?: Maybe<Scalars['String']>;
  hasHistory?: Maybe<Scalars['Boolean']>;
  measurement?: Maybe<ThermostatMeasurement>;
}

export interface SensorHistory {
   __typename: 'SensorHistory';
  sensorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['DynamicType']>;
  valueType?: Maybe<SettingValue>;
  valueIsArray?: Maybe<Scalars['Boolean']>;
  isReadOnly?: Maybe<Scalars['Boolean']>;
  inputOptions?: Maybe<SettingsItemInputOptions>;
}

export enum SettingItemType {
  Header = 'header',
  Footer = 'footer',
  Separator = 'separator',
  Setting = 'setting',
  Link = 'link'
}

export interface SettingsItem {
   __typename: 'SettingsItem';
  type?: Maybe<SettingItemType>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  valueText?: Maybe<Scalars['String']>;
  dependsOnSetting?: Maybe<Scalars['String']>;
  callToAction?: Maybe<CallToAction>;
  setting?: Maybe<Setting>;
}

export interface SettingsItemInput {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['SettingsItemInputValue']>;
}

export interface SettingsItemInputOptions {
   __typename: 'SettingsItemInputOptions';
  stringValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  unitText?: Maybe<Scalars['String']>;
  /** @deprecated moved to stringValues */
  textValues?: Maybe<Array<Maybe<Scalars['String']>>>;
}


export enum SettingValue {
  String = 'string',
  Boolean = 'boolean',
  Int = 'int',
  Double = 'double',
  Time = 'time',
  Date = 'date',
  DateTime = 'date_time'
}

export interface SettlementMethod {
   __typename: 'SettlementMethod';
  method?: Maybe<Scalars['String']>;
  validFrom?: Maybe<Scalars['String']>;
}

export interface SignupStatus {
   __typename: 'SignupStatus';
  feedStep?: Maybe<ProcessStep>;
  avatarStep?: Maybe<ProcessStep>;
  steps?: Maybe<Array<Maybe<ProcessStep>>>;
}

export interface SubscribableNotification {
   __typename: 'SubscribableNotification';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  channels?: Maybe<Array<Maybe<NotificationChannel>>>;
}

export interface Subscription {
   __typename: 'Subscription';
  id: Scalars['ID'];
  walletId?: Maybe<Scalars['ID']>;
  validFrom?: Maybe<Scalars['String']>;
  validTo?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  billingRegionId?: Maybe<Scalars['Int']>;
  priceRating?: Maybe<PriceRatingRoot>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  energyDeal?: Maybe<EnergyDeal>;
}

export interface Thermostat {
   __typename: 'Thermostat';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  connectivity?: Maybe<Scalars['String']>;
  state?: Maybe<ThermostatState>;
  /** @deprecated Moved to temperature and setpoint sensor. */
  measurements?: Maybe<ThermostatMeasurements>;
  capabilities?: Maybe<Array<Maybe<ThermostatCapability>>>;
  modes?: Maybe<Array<Maybe<ThermostatMode>>>;
  template?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated */
  hasSettings?: Maybe<Scalars['Boolean']>;
  /** @deprecated Moved to schedule */
  supportsDayNightSchedule?: Maybe<Scalars['Boolean']>;
  supportsAwayMode?: Maybe<Scalars['Boolean']>;
  schedule?: Maybe<DayNightSchedule>;
  temperatureSensor?: Maybe<Sensor>;
  setPointSensor?: Maybe<Sensor>;
  faqUrl?: Maybe<Scalars['String']>;
}

export interface ThermostatCapability {
   __typename: 'ThermostatCapability';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Scalars['DynamicType']>;
}

export interface ThermostatMeasurement {
   __typename: 'ThermostatMeasurement';
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionLong?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueText?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  unitText?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  typeText?: Maybe<Scalars['String']>;
}

export interface ThermostatMeasurements {
   __typename: 'ThermostatMeasurements';
  temperature?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  display?: Maybe<Array<Maybe<ThermostatMeasurement>>>;
}

export interface ThermostatMode {
   __typename: 'ThermostatMode';
  name?: Maybe<Scalars['String']>;
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface ThermostatMutation {
   __typename: 'ThermostatMutation';
  setState?: Maybe<Scalars['Boolean']>;
  setName?: Maybe<Scalars['Boolean']>;
  setSchedule?: Maybe<GqlMutationGeneralResponse>;
}


export interface ThermostatMutationSetStateArgs {
  mode?: Maybe<Scalars['String']>;
  comfortTemperature?: Maybe<Scalars['Float']>;
  fanLevel?: Maybe<Scalars['String']>;
  onOff?: Maybe<Scalars['String']>;
}


export interface ThermostatMutationSetNameArgs {
  name?: Maybe<Scalars['String']>;
}


export interface ThermostatMutationSetScheduleArgs {
  day: DayNightScheduleSettingsInput;
  night: DayNightScheduleSettingsInput;
  enablePriceOptimization: Scalars['Boolean'];
  comfortWeight: Scalars['Int'];
}

export interface ThermostatState {
   __typename: 'ThermostatState';
  mode?: Maybe<Scalars['String']>;
  comfortTemperature?: Maybe<Scalars['Float']>;
  fanLevel?: Maybe<Scalars['String']>;
  onOff?: Maybe<Scalars['String']>;
}

export interface VehicleBrand {
   __typename: 'VehicleBrand';
  name?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  models?: Maybe<Array<Maybe<VehicleModel>>>;
  isPairable?: Maybe<Scalars['Boolean']>;
  pairingScreen?: Maybe<VehiclePairingScreen>;
}

export interface VehicleDetailsScreen {
   __typename: 'VehicleDetailsScreen';
  siteTitle?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SettingsItem>>>;
  removeButton?: Maybe<Button>;
  removeAlert?: Maybe<Alert>;
}

export interface VehicleModel {
   __typename: 'VehicleModel';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
}

export interface VehiclePairingScreen {
   __typename: 'VehiclePairingScreen';
  siteTitle?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  oauth?: Maybe<PairableDeviceOAuth>;
  credentials?: Maybe<PairableDeviceCredentials>;
}

export interface Wallet {
   __typename: 'Wallet';
  id: Scalars['String'];
  paymentMethods: Array<Maybe<PaymentMethod>>;
  directDebitToPromote?: Maybe<Scalars['String']>;
}

export interface Weather {
   __typename: 'Weather';
  minTemperature?: Maybe<Scalars['Float']>;
  maxTemperature?: Maybe<Scalars['Float']>;
  entries?: Maybe<Array<Maybe<WeatherEntry>>>;
}

export interface WeatherEntry {
   __typename: 'WeatherEntry';
  time: Scalars['String'];
  temperature?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  fog?: Maybe<Scalars['Float']>;
  /** mm */
  precipitation?: Maybe<Scalars['Float']>;
  /** percent (0 - 100) */
  cloudiness?: Maybe<Scalars['Float']>;
  /** meter per second */
  windSpeed?: Maybe<Scalars['Float']>;
  /** meter per second */
  windGust?: Maybe<Scalars['Float']>;
}


export interface WifiScanRecord {
   __typename: 'WifiScanRecord';
  ssid?: Maybe<Scalars['String']>;
  rssi?: Maybe<Scalars['Float']>;
  open?: Maybe<Scalars['Boolean']>;
}

export interface YAxis {
   __typename: 'YAxis';
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
}

export type GetWeatherQueryVariables = {};


export type GetWeatherQuery = (
  { __typename: 'Query' }
  & { me?: Maybe<(
    { __typename: 'Me' }
    & { home?: Maybe<(
      { __typename: 'Home' }
      & { weather?: Maybe<(
        { __typename: 'Weather' }
        & Pick<Weather, 'minTemperature' | 'maxTemperature'>
        & { entries?: Maybe<Array<Maybe<(
          { __typename: 'WeatherEntry' }
          & Pick<WeatherEntry, 'time' | 'temperature' | 'type'>
        )>>> }
      )> }
    )> }
  )> }
);


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
export type GetWeatherComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetWeatherQuery, GetWeatherQueryVariables>, 'query'>;

    export const GetWeatherComponent = (props: GetWeatherComponentProps) => (
      <ApolloReactComponents.Query<GetWeatherQuery, GetWeatherQueryVariables> query={GetWeatherDocument} {...props} />
    );
    
export type GetWeatherProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetWeatherQuery, GetWeatherQueryVariables> & TChildProps;
export function withGetWeather<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetWeatherQuery,
  GetWeatherQueryVariables,
  GetWeatherProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetWeatherQuery, GetWeatherQueryVariables, GetWeatherProps<TChildProps>>(GetWeatherDocument, {
      alias: 'getWeather',
      ...operationOptions
    });
};
export type GetWeatherQueryResult = ApolloReactCommon.QueryResult<GetWeatherQuery, GetWeatherQueryVariables>;