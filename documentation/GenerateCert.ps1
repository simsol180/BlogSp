
$date_now = Get-Date

$params = @{
    FriendlyName = 'dev.byrd.tips'
    Type = 'Custom'
    DnsName = 'dev.byrd.tips'
    CertSToreLocation = 'cert:\currentuser\my'
    KeyLength = 2048
    NotAfter = $date_now.AddYears(3)
    Subject = 'CN=dev.byrd.tips,DC=dev,DC=byrd,DC=tips'
}

$cert = New-SelfSignedCertificate @params