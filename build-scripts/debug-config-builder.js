module.exports = (props) => `<ExtensionList>
    <Extension Id="${props.extensionId}">
        <HostList>
            <Host Name="PHXS" Port="${props.debugPort}"/>
            <Host Name="PHSP" Port="${props.debugPort}"/>
        </HostList>
    </Extension>
</ExtensionList>`