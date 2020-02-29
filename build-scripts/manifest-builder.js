module.exports = (props) => `<?xml version='1.0' encoding='UTF-8'?>
<ExtensionManifest ExtensionBundleId="${props.extensionId}" 
                   ExtensionBundleVersion="1.0.0" 
                   Version="7.0" 
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ExtensionList>
    <Extension Id="${props.extensionId}" Version="${props.version}" />
  </ExtensionList>
  <ExecutionEnvironment>
    <HostList>
      <Host Name="PHSP" Version="19" />
      <Host Name="PHXS" Version="19" />
    </HostList>
    <LocaleList>
      <Locale Code="All" />
    </LocaleList>
    <RequiredRuntimeList>
      <RequiredRuntime Name="CSXS" Version="7.0" />
    </RequiredRuntimeList>
  </ExecutionEnvironment>
  <DispatchInfoList>
    <Extension Id="${props.extensionId}">
      <DispatchInfo>
        <Resources>
          <MainPath>./client/index.html</MainPath>
          <CEFCommandLine />
        </Resources>
        <Lifecycle>
          <AutoVisible>true</AutoVisible>
        </Lifecycle>
        <UI>
          <Type>Panel</Type>
          <Menu>${props.panelReadableName}</Menu>
          <Geometry>
            <Size>
              <Height>500</Height>
              <Width>350</Width>
            </Size>
            <MinSize>
                <Height>50</Height>
                <Width>100</Width>
            </MinSize>
            <MaxSize>
                <Height>800</Height>
                <Width>800</Width>
            </MaxSize>
          </Geometry>
          <Icons />
        </UI>
      </DispatchInfo>
    </Extension>
  </DispatchInfoList>
</ExtensionManifest>`