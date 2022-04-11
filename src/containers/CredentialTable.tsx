import React, { useState, useEffect } from 'react';
import { Table, Button } from "react-bootstrap";
import { useAuthentication } from "./Authentication";
import { useGlobalTokenValue } from "./MessageListener";
import CheckCircle from '../assets/images/icons/check_green_circle.svg'
import CrossCircle from '../assets/images/icons/cross_red_circle.svg'

const CredentialTable = () => {
    const { sdk } = useAuthentication();
    var [
      credentialShareResponseToken,
      setCredentialShareResponseToken,
    ] = useState<string[]>([]);
    const [globalToken] = useGlobalTokenValue();
    const [vcData, setVCData] = useState<any[]>([]);
    useEffect(() => {
      credentialShareResponseToken.push("eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNhbGxiYWNrVVJMIjoiIiwic3VwcGxpZWRDcmVkZW50aWFscyI6W3siQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL3NjaGVtYS5hZmZpbmlkaS5jb20vSUREb2N1bWVudENyZWRlbnRpYWxQZXJzb25WMVYxLTAuanNvbmxkIl0sImlkIjoiY2xhaW1JZDpjNzJlMzQzNmY2NGM0M2Q3IiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIklERG9jdW1lbnRDcmVkZW50aWFsUGVyc29uVjEiXSwiaG9sZGVyIjp7ImlkIjoiZGlkOmVsZW06RWlCNG5TV1V4Wl9aRDBlQkpRalNzSmM5ZS1GWDhYRjRGSWEtbVR6czljVW1LQSJ9LCJjcmVkZW50aWFsU3ViamVjdCI6eyJkYXRhIjp7IkB0eXBlIjpbIlBlcnNvbiIsIlBlcnNvbkUiLCJJRERvY3VtZW50UGVyc29uIl0sImRlZ3JlZSI6IkJhY2hlbG9yIG9mIFNjaWVuY2UiLCJtYWpvciI6IkNvbXB1dGVyIFNjaWVuY2UiLCJtaW5vciI6Ik1hdGhlbWF0aWNzIiwiY3dpZCI6IjUwMjQ3OTY2IiwiaXNzdWVEYXRlIjoiTWF5IDEzLCAyMDIyIiwiaGFzSUREb2N1bWVudCI6eyJAdHlwZSI6WyJSb2xlIiwiSUREb2N1bWVudFJvbGUiXSwiaGFzSUREb2N1bWVudCI6eyJAdHlwZSI6IklERG9jdW1lbnQiLCJpc3N1ZXIiOiJCYXlzaWRlIFVuaXZlcnNpdHkiLCJkb2N1bWVudFR5cGUiOiJlZHVjYXRpb25faWQiLCJpc3N1ZURhdGUiOiIwNS8xNC8yMDIyIiwiY2xhc3NpZmljYXRpb25NZXRob2QiOiJhdXRvbWF0aWMiLCJpZENsYXNzIjoie1wiY29tcGFueUlEXCI6XCI1MDI0NzcxMlwiLFwiY291bnRyeUNvZGVcIjpcIlwiLFwiZW1haWxcIjpcImpqc2FpYW5AeWFob28uY29tXCIsXCJpc3N1ZXJPcmdhbml6YXRpb25cIjpcIkJheXNpZGUgVW5pdmVyc2l0eVwiLFwiYWZmaW5pZGljb21wYW55SURcIjpcIjJicnA4ZHlrN3NcIn0iLCJjb3VudHJ5Q29kZSI6Ii4uLiJ9fSwiZ2l2ZW5OYW1lIjoidGVzdCIsImZhbWlseU5hbWUiOiIiLCJlbWFpbCI6Impqc2FpYW5AeWFob28uY29tIn19LCJjcmVkZW50aWFsU2NoZW1hIjp7ImlkIjoiaHR0cHM6Ly9zY2hlbWEuYWZmaW5pZGkuY29tL0lERG9jdW1lbnRDcmVkZW50aWFsUGVyc29uVjFWMS0wLmpzb24iLCJ0eXBlIjoiSnNvblNjaGVtYVZhbGlkYXRvcjIwMTgifSwiaXNzdWFuY2VEYXRlIjoiMjAyMi0wNC0wOFQwMjowNjozNC4yMDRaIiwiaXNzdWVyIjoiZGlkOmVsZW06RWlCNG5TV1V4Wl9aRDBlQkpRalNzSmM5ZS1GWDhYRjRGSWEtbVR6czljVW1LQTtlbGVtOmluaXRpYWwtc3RhdGU9ZXlKd2NtOTBaV04wWldRaU9pSmxlVXAyWTBkV2VWbFlVbkJpTWpScFQybEthbU50Vm1oa1IxVnBURU5LY21GWFVXbFBhVWxxWTBoS2NHSlhSbmxsVTBselNXMUdjMXA1U1RaSmExWlVUV3BWTWxONVNqa2lMQ0p3WVhsc2IyRmtJam9pWlhsS1FWa3lPWFZrUjFZMFpFTkpOa2x0YURCa1NFSjZUMms0ZG1SNlRuQmFRelYyWTIxamRtTXlWbXBrV0Vwd1pFaHJkbVJxU1dsTVEwcDNaRmRLYzJGWFRreGFXR3RwVDJ4ME4wbHRiR3RKYW05cFNUTkNlV0ZYTVdoamJtdHBURU5LTVdNeVJtNWFVMGsyU1c1T2NGb3lOWEJpYldOcFRFTktNR1ZZUW14SmFtOXBWVEpXYW1ORVNURk9iWE40Vm0xV2VXRlhXbkJaTWtZd1lWYzVkVk15VmpWTmFrRjRUME5KYzBsdVFqRlpiWGh3V1RCMGJHVlZhR3hsUTBrMlNXcEJlazFxVFRWTlZGVjRXbXBuZWs1dFRYcFphbXh0VFVkU2EwOUhXWGRhYlVreldUSkplazVVWXpWT2FrbDVUV3BLYTFwcVFtcGFiVWsxVFZkSmQwMTZaelZQUkZacFRrUkJkMDVVU1RWT1YwVTBUMWRhYlU1NVNqbE1TSE5wWVZkUmFVOXBTV3BqYlZacVlqTmFiR051YTJsTVEwb3hZekpHYmxwVFNUWkpia3BzV1RJNU1scFlTalZKYVhkcFpFaHNkMXBUU1RaSmJFNXNXVE5CZVU1VVduSk5WbHBzWTIxc2JXRlhUbWhrUjJ4MlltdDBiR1ZVU1hkTlZHZHBURU5LZDJSWFNuTmhWMDVNV2xoc1NWcFlaMmxQYVVsM1RYcFJlbGw2Vm14TmFrbDZUMWRSTkUxdFZYZE5lazE1V1RKRk5FNUhSVEJPZWs1cVRXMUpNazVYV1RCT2VrbDVXVmRPYTFsVVl6Sk5WRVUxVG5wbk1WcHFZek5aYWtKclRXcFpOVTVFV1hkT2Vsa3pXVmRaYVdaV01ITkpiVVl4WkVkb2JHSnVVbkJaTWtZd1lWYzVkVWxxY0dKSmFVNTNZMjFzZEZsWVNqVkpiREJ6U1cxR2VtTXlWbmxrUjJ4Mlltc3hiR1JIYUhaYVEwazJWM2xKYW1OSVNuQmlWMFo1WlZOS1pHWlJJaXdpYzJsbmJtRjBkWEpsSWpvaU56bFBlbXQzVlhsSFVWa3hkRGh3VFRCdWNqaHZaM0l6WkZoRFVGSjVNV1ptUjJoQkxVeGtUa3hFYjFOVVVsUjVUVkpEZWxSUU1UZElXRTV3UkdzNFVXdDJWbWw2WDBNd05WOWpjbWQzZUZscFJVWnZTR2NpZlEiLCJwcm9vZiI6eyJ0eXBlIjoiRWNkc2FTZWNwMjU2azFTaWduYXR1cmUyMDE5IiwiY3JlYXRlZCI6IjIwMjItMDQtMDhUMDI6MDY6MzRaIiwidmVyaWZpY2F0aW9uTWV0aG9kIjoiZGlkOmVsZW06RWlCNG5TV1V4Wl9aRDBlQkpRalNzSmM5ZS1GWDhYRjRGSWEtbVR6czljVW1LQSNwcmltYXJ5IiwicHJvb2ZQdXJwb3NlIjoiYXNzZXJ0aW9uTWV0aG9kIiwiandzIjoiZXlKaGJHY2lPaUpGVXpJMU5rc2lMQ0ppTmpRaU9tWmhiSE5sTENKamNtbDBJanBiSW1JMk5DSmRmUS4udUNGendJN291ME0wbERFcWNtSWFzeU5lVWtQYnh0cW9HNkNBUVkxcHR1TTh0U3Y2NUlidGN6UDlJcXpLZWIteWRLc1RqQjduYWZqUy1nSExxTTZtSkEifX1dfSwiZXhwIjoxNjQ5Mzg0MzcxMDE0LCJ0eXAiOiJjcmVkZW50aWFsUmVzcG9uc2UiLCJqdGkiOiIwNTA3M2ZlMDA2Y2Q4YTQ3IiwiYXVkIjoiZGlkOmVsZW06RWlENGZJcUtzck1GMHE2bGgwcExuN2Z2NE82UWp2SmFyOUVlSkYweHlHeUxmdztlbGVtOmluaXRpYWwtc3RhdGU9ZXlKd2NtOTBaV04wWldRaU9pSmxlVXAyWTBkV2VWbFlVbkJpTWpScFQybEthbU50Vm1oa1IxVnBURU5LY21GWFVXbFBhVWxxWTBoS2NHSlhSbmxsVTBselNXMUdjMXA1U1RaSmExWlVUV3BWTWxONVNqa2lMQ0p3WVhsc2IyRmtJam9pWlhsS1FWa3lPWFZrUjFZMFpFTkpOa2x0YURCa1NFSjZUMms0ZG1SNlRuQmFRelYyWTIxamRtTXlWbXBrV0Vwd1pFaHJkbVJxU1dsTVEwcDNaRmRLYzJGWFRreGFXR3RwVDJ4ME4wbHRiR3RKYW05cFNUTkNlV0ZYTVdoamJtdHBURU5LTVdNeVJtNWFVMGsyU1c1T2NGb3lOWEJpYldOcFRFTktNR1ZZUW14SmFtOXBWVEpXYW1ORVNURk9iWE40Vm0xV2VXRlhXbkJaTWtZd1lWYzVkVk15VmpWTmFrRjRUME5KYzBsdVFqRlpiWGh3V1RCMGJHVlZhR3hsUTBrMlNXcEJlVTlVYkdoWmJWWnFUVzFhYUU5SFJtaE5hbXhvVFVSS2EwOVVVbXROVjFVMFdsUk9hMDVxWXpGWmJVMHlUakpWTWs1RVZtMU9SRlV6VDFSV2EwMXFaM2hQUjFVd1QxZE5lazFxVm0xT2JVbDRUMFJaTVU5VFNqbE1TSE5wWVZkUmFVOXBTV3BqYlZacVlqTmFiR051YTJsTVEwb3hZekpHYmxwVFNUWkpia3BzV1RJNU1scFlTalZKYVhkcFpFaHNkMXBUU1RaSmJFNXNXVE5CZVU1VVduSk5WbHBzWTIxc2JXRlhUbWhrUjJ4MlltdDBiR1ZVU1hkTlZHZHBURU5LZDJSWFNuTmhWMDVNV2xoc1NWcFlaMmxQYVVsM1RYcFJlRTE2WjNsT2FrVXdUVlJqZUUxRVFUUmFha3BxV2xSbk1sbFhVVEpPZWxVMVdsUmFhRTV0UlhoTlYwVjRXbXBvYkU1RVFtaGFSRXBvVGtSVk1rMUhWWGxhUkZFelRtMUZNMWxVYkdsT2JWbDNUbFJKYVdaV01ITkpiVVl4WkVkb2JHSnVVbkJaTWtZd1lWYzVkVWxxY0dKSmFVNTNZMjFzZEZsWVNqVkpiREJ6U1cxR2VtTXlWbmxrUjJ4Mlltc3hiR1JIYUhaYVEwazJWM2xKYW1OSVNuQmlWMFo1WlZOS1pHWlJJaXdpYzJsbmJtRjBkWEpsSWpvaWRXbDRaV3hGUkRGR1YwZDZSMkY0WkU1d1MwTm5SRUZQTkcxNFRuVm9WRGRxWjBSMFFqZGlNVlZsWjNCc1dEWnFjVzF1ZUVSVlZERXRlakF4VEZGQlUyRnZWVE5SWlY5T2FWOXBiV2RTWjBodldGZFRRV2NpZlEiLCJpc3MiOiJkaWQ6ZWxlbTpFaURvNHVsQXBYcmhzaEhtV2R1MmxmLTN3VjlDY1lsVEpqRDZlakxTODdaLWtnO2VsZW06aW5pdGlhbC1zdGF0ZT1leUp3Y205MFpXTjBaV1FpT2lKbGVVcDJZMGRXZVZsWVVuQmlNalJwVDJsS2FtTnRWbWhrUjFWcFRFTktjbUZYVVdsUGFVbHFZMGhLY0dKWFJubGxVMGx6U1cxR2MxcDVTVFpKYTFaVVRXcFZNbE41U2praUxDSndZWGxzYjJGa0lqb2laWGxLUVZreU9YVmtSMVkwWkVOSk5rbHRhREJrU0VKNlQyazRkbVI2VG5CYVF6VjJZMjFqZG1NeVZtcGtXRXB3WkVocmRtUnFTV2xNUTBwM1pGZEtjMkZYVGt4YVdHdHBUMngwTjBsdGJHdEphbTlwU1ROQ2VXRlhNV2hqYm10cFRFTktNV015Um01YVUwazJTVzVPY0ZveU5YQmliV05wVEVOS01HVllRbXhKYW05cFZUSldhbU5FU1RGT2JYTjRWbTFXZVdGWFduQlpNa1l3WVZjNWRWTXlWalZOYWtGNFQwTkpjMGx1UWpGWmJYaHdXVEIwYkdWVmFHeGxRMGsyU1dwQmVscFhWWGxOTWxGNFdrUkJlbHBFUW1wUFJFVXhXa1JhYkZwRVNUSk9la2t6V1ZSck0xcHFUWGxOVkZGNVdsZFZlVnBFYTNsT2VrSnNXa1JTYWxwRVNtcFBSRkpvVG5wWk1VMXFWbXBQUjFVMVQxUnNiRnBUU2psTVNITnBZVmRSYVU5cFNXcGpiVlpxWWpOYWJHTnVhMmxNUTBveFl6SkdibHBUU1RaSmJrcHNXVEk1TWxwWVNqVkphWGRwWkVoc2QxcFRTVFpKYkU1c1dUTkJlVTVVV25KTlZscHNZMjFzYldGWFRtaGtSMngyWW10MGJHVlVTWGROVkdkcFRFTktkMlJYU25OaFYwNU1XbGhzU1ZwWVoybFBhVWwzVFdwb2EwNXFWVEJOUjBrMFRsZFZNVnBVVG0xYWJVVjVUVmRXYWs5RVdtdFpWMWw2V2xSQk5FMUVRbTFhUjBWNlQxUmplRTR5VFhsYVZFa3pXbXByZWxwWFNYaGFSR015VFRKT2EwMUhVVEZOTWtab1dWZEZhV1pXTUhOSmJVWXhaRWRvYkdKdVVuQlpNa1l3WVZjNWRVbHFjR0pKYVU1M1kyMXNkRmxZU2pWSmJEQnpTVzFHZW1NeVZubGtSMngyWW1zeGJHUkhhSFphUTBrMlYzbEphbU5JU25CaVYwWjVaVk5LWkdaUklpd2ljMmxuYm1GMGRYSmxJam9pWVVnM1lYZFRWMjUxYmtKeVpuSnZOa3hRTUdjM2NVWTVSMUpVT0ZSVk1raHFXVU56UmtvemJuZFFORFYwVkd4R1ptVkRYMjl2UlZKaVRrNVdSR1pPYmxsMU5YQlBXVTF1VkV4bFFrVmtWamhSYW5OeFgyY2lmUSNwcmltYXJ5In0.78b5fd6119272907887a2a5b26bf03c4b67b20561565dda3bcacdd341888715c3680ca1b2befeae079fbe7fda5df265fd4904945cd57f03f6fe24d2a9ff29d9b");
      credentialShareResponseToken.push("eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpbnRlcmFjdGlvblRva2VuIjp7ImNhbGxiYWNrVVJMIjoiIiwic3VwcGxpZWRDcmVkZW50aWFscyI6W3siQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL3NjaGVtYS5hZmZpbmlkaS5jb20vSUREb2N1bWVudENyZWRlbnRpYWxQZXJzb25WMVYxLTAuanNvbmxkIl0sImlkIjoiY2xhaW1JZDo0ZWQ3NzliODMyMTE5ZmIzIiwidHlwZSI6WyJWZXJpZmlhYmxlQ3JlZGVudGlhbCIsIklERG9jdW1lbnRDcmVkZW50aWFsUGVyc29uVjEiXSwiaG9sZGVyIjp7ImlkIjoiZGlkOmVsZW06RWlBelViM3BLWTA4dC1UdktCZW9pMGEyZHMySXUxUnN4NGM1V1RKQ2JPaTVtQSJ9LCJjcmVkZW50aWFsU3ViamVjdCI6eyJkYXRhIjp7IkB0eXBlIjpbIlBlcnNvbiIsIlBlcnNvbkUiLCJJRERvY3VtZW50UGVyc29uIl0sImdlbmRlciI6Ik1hbGUiLCJiaXJ0aERhdGUiOiIxOTg2LTA3LTAxVDAwOjAwOjAwLjAwMFoiLCJnaXZlbk5hbWUiOiJ0ZXN0IiwiZmFtaWx5TmFtZSI6IktyYXZldHMiLCJhZGRyZXNzIjoiYXB0LiA5LCBQdXNoa2luc2FreWEgMzEtViwgS3lpdiwgVWtyYWluZSIsImhhc0lERG9jdW1lbnQiOnsiQHR5cGUiOlsiUm9sZSIsIklERG9jdW1lbnRSb2xlIl0sImhhc0lERG9jdW1lbnQiOnsiQHR5cGUiOiJJRERvY3VtZW50IiwiaXNzdWVyIjoiSGVhbHRoIFNjaWVuY2VzIEF1dGhvcml0eSIsImRvY3VtZW50VHlwZSI6InBoYXJtYWNldXRpY2FsX2lkIiwiaXNzdWVEYXRlIjoidGVzdCIsImNsYXNzaWZpY2F0aW9uTWV0aG9kIjoiYXV0b21hdGljIiwiaWRDbGFzcyI6IntcImNvbXBhbnlJRFwiOlwiXCIsXCJjb3VudHJ5Q29kZVwiOlwiXCIsXCJlbWFpbFwiOlwiampzYWlhbkB5YWhvby5jb21cIixcInVlblwiOlwidGVzdFwiLFwiYWZmaW5pZGlDb21wYW55SURcIjpcImxDOFVjNkY5MVlcIn0iLCJjb3VudHJ5Q29kZSI6Ii4uLiJ9fSwidWVuIjoidGVzdCIsImVtYWlsIjoiampzYWlhbkB5YWhvby5jb20ifX0sImNyZWRlbnRpYWxTY2hlbWEiOnsiaWQiOiJodHRwczovL3NjaGVtYS5hZmZpbmlkaS5jb20vSUREb2N1bWVudENyZWRlbnRpYWxQZXJzb25WMVYxLTAuanNvbiIsInR5cGUiOiJKc29uU2NoZW1hVmFsaWRhdG9yMjAxOCJ9LCJpc3N1YW5jZURhdGUiOiIyMDIyLTA0LTAxVDAzOjA4OjI5Ljk5MVoiLCJpc3N1ZXIiOiJkaWQ6ZWxlbTpFaUI0blNXVXhaX1pEMGVCSlFqU3NKYzllLUZYOFhGNEZJYS1tVHpzOWNVbUtBO2VsZW06aW5pdGlhbC1zdGF0ZT1leUp3Y205MFpXTjBaV1FpT2lKbGVVcDJZMGRXZVZsWVVuQmlNalJwVDJsS2FtTnRWbWhrUjFWcFRFTktjbUZYVVdsUGFVbHFZMGhLY0dKWFJubGxVMGx6U1cxR2MxcDVTVFpKYTFaVVRXcFZNbE41U2praUxDSndZWGxzYjJGa0lqb2laWGxLUVZreU9YVmtSMVkwWkVOSk5rbHRhREJrU0VKNlQyazRkbVI2VG5CYVF6VjJZMjFqZG1NeVZtcGtXRXB3WkVocmRtUnFTV2xNUTBwM1pGZEtjMkZYVGt4YVdHdHBUMngwTjBsdGJHdEphbTlwU1ROQ2VXRlhNV2hqYm10cFRFTktNV015Um01YVUwazJTVzVPY0ZveU5YQmliV05wVEVOS01HVllRbXhKYW05cFZUSldhbU5FU1RGT2JYTjRWbTFXZVdGWFduQlpNa1l3WVZjNWRWTXlWalZOYWtGNFQwTkpjMGx1UWpGWmJYaHdXVEIwYkdWVmFHeGxRMGsyU1dwQmVrMXFUVFZOVkZWNFdtcG5lazV0VFhwWmFteHRUVWRTYTA5SFdYZGFiVWt6V1RKSmVrNVVZelZPYWtsNVRXcEthMXBxUW1wYWJVazFUVmRKZDAxNlp6VlBSRlpwVGtSQmQwNVVTVFZPVjBVMFQxZGFiVTU1U2psTVNITnBZVmRSYVU5cFNXcGpiVlpxWWpOYWJHTnVhMmxNUTBveFl6SkdibHBUU1RaSmJrcHNXVEk1TWxwWVNqVkphWGRwWkVoc2QxcFRTVFpKYkU1c1dUTkJlVTVVV25KTlZscHNZMjFzYldGWFRtaGtSMngyWW10MGJHVlVTWGROVkdkcFRFTktkMlJYU25OaFYwNU1XbGhzU1ZwWVoybFBhVWwzVFhwUmVsbDZWbXhOYWtsNlQxZFJORTF0VlhkTmVrMTVXVEpGTkU1SFJUQk9lazVxVFcxSk1rNVhXVEJPZWtsNVdWZE9hMWxVWXpKTlZFVTFUbnBuTVZwcVl6Tlpha0pyVFdwWk5VNUVXWGRPZWxreldWZFphV1pXTUhOSmJVWXhaRWRvYkdKdVVuQlpNa1l3WVZjNWRVbHFjR0pKYVU1M1kyMXNkRmxZU2pWSmJEQnpTVzFHZW1NeVZubGtSMngyWW1zeGJHUkhhSFphUTBrMlYzbEphbU5JU25CaVYwWjVaVk5LWkdaUklpd2ljMmxuYm1GMGRYSmxJam9pTnpsUGVtdDNWWGxIVVZreGREaHdUVEJ1Y2podlozSXpaRmhEVUZKNU1XWm1SMmhCTFV4a1RreEViMU5VVWxSNVRWSkRlbFJRTVRkSVdFNXdSR3M0VVd0MlZtbDZYME13TlY5amNtZDNlRmxwUlVadlNHY2lmUSIsInByb29mIjp7InR5cGUiOiJFY2RzYVNlY3AyNTZrMVNpZ25hdHVyZTIwMTkiLCJjcmVhdGVkIjoiMjAyMi0wNC0wMVQwMzowODozMFoiLCJ2ZXJpZmljYXRpb25NZXRob2QiOiJkaWQ6ZWxlbTpFaUI0blNXVXhaX1pEMGVCSlFqU3NKYzllLUZYOFhGNEZJYS1tVHpzOWNVbUtBI3ByaW1hcnkiLCJwcm9vZlB1cnBvc2UiOiJhc3NlcnRpb25NZXRob2QiLCJqd3MiOiJleUpoYkdjaU9pSkZVekkxTmtzaUxDSmlOalFpT21aaGJITmxMQ0pqY21sMElqcGJJbUkyTkNKZGZRLi4wb2MzTklpWmNiLTctbnVjNUU0Wk1Fbl9HM2JNb2lfakM2VEx5UXM1NkJjTU1PdVZWTXJ1MFJlWloyZDUyVjEzQW50ZWY3U2hEd3BQbXR6bkp1Ym8yZyJ9fV19LCJleHAiOjE2NDkzODQ3NTc5MTcsInR5cCI6ImNyZWRlbnRpYWxSZXNwb25zZSIsImp0aSI6IjA1MDczZmUwMDZjZDhhNDciLCJhdWQiOiJkaWQ6ZWxlbTpFaUQ0ZklxS3NyTUYwcTZsaDBwTG43ZnY0TzZRanZKYXI5RWVKRjB4eUd5TGZ3O2VsZW06aW5pdGlhbC1zdGF0ZT1leUp3Y205MFpXTjBaV1FpT2lKbGVVcDJZMGRXZVZsWVVuQmlNalJwVDJsS2FtTnRWbWhrUjFWcFRFTktjbUZYVVdsUGFVbHFZMGhLY0dKWFJubGxVMGx6U1cxR2MxcDVTVFpKYTFaVVRXcFZNbE41U2praUxDSndZWGxzYjJGa0lqb2laWGxLUVZreU9YVmtSMVkwWkVOSk5rbHRhREJrU0VKNlQyazRkbVI2VG5CYVF6VjJZMjFqZG1NeVZtcGtXRXB3WkVocmRtUnFTV2xNUTBwM1pGZEtjMkZYVGt4YVdHdHBUMngwTjBsdGJHdEphbTlwU1ROQ2VXRlhNV2hqYm10cFRFTktNV015Um01YVUwazJTVzVPY0ZveU5YQmliV05wVEVOS01HVllRbXhKYW05cFZUSldhbU5FU1RGT2JYTjRWbTFXZVdGWFduQlpNa1l3WVZjNWRWTXlWalZOYWtGNFQwTkpjMGx1UWpGWmJYaHdXVEIwYkdWVmFHeGxRMGsyU1dwQmVVOVViR2haYlZacVRXMWFhRTlIUm1oTmFteG9UVVJLYTA5VVVtdE5WMVUwV2xST2EwNXFZekZaYlUweVRqSlZNazVFVm0xT1JGVXpUMVJXYTAxcVozaFBSMVV3VDFkTmVrMXFWbTFPYlVsNFQwUlpNVTlUU2psTVNITnBZVmRSYVU5cFNXcGpiVlpxWWpOYWJHTnVhMmxNUTBveFl6SkdibHBUU1RaSmJrcHNXVEk1TWxwWVNqVkphWGRwWkVoc2QxcFRTVFpKYkU1c1dUTkJlVTVVV25KTlZscHNZMjFzYldGWFRtaGtSMngyWW10MGJHVlVTWGROVkdkcFRFTktkMlJYU25OaFYwNU1XbGhzU1ZwWVoybFBhVWwzVFhwUmVFMTZaM2xPYWtVd1RWUmplRTFFUVRSYWFrcHFXbFJuTWxsWFVUSk9lbFUxV2xSYWFFNXRSWGhOVjBWNFdtcG9iRTVFUW1oYVJFcG9Ua1JWTWsxSFZYbGFSRkV6VG0xRk0xbFViR2xPYlZsM1RsUkphV1pXTUhOSmJVWXhaRWRvYkdKdVVuQlpNa1l3WVZjNWRVbHFjR0pKYVU1M1kyMXNkRmxZU2pWSmJEQnpTVzFHZW1NeVZubGtSMngyWW1zeGJHUkhhSFphUTBrMlYzbEphbU5JU25CaVYwWjVaVk5LWkdaUklpd2ljMmxuYm1GMGRYSmxJam9pZFdsNFpXeEZSREZHVjBkNlIyRjRaRTV3UzBOblJFRlBORzE0VG5Wb1ZEZHFaMFIwUWpkaU1WVmxaM0JzV0RacWNXMXVlRVJWVkRFdGVqQXhURkZCVTJGdlZUTlJaVjlPYVY5cGJXZFNaMGh2V0ZkVFFXY2lmUSIsImlzcyI6ImRpZDplbGVtOkVpQXpVYjNwS1kwOHQtVHZLQmVvaTBhMmRzMkl1MVJzeDRjNVdUSkNiT2k1bUE7ZWxlbTppbml0aWFsLXN0YXRlPWV5SndjbTkwWldOMFpXUWlPaUpsZVVwMlkwZFdlVmxZVW5CaU1qUnBUMmxLYW1OdFZtaGtSMVZwVEVOS2NtRlhVV2xQYVVscVkwaEtjR0pYUm5sbFUwbHpTVzFHYzFwNVNUWkphMVpVVFdwVk1sTjVTamtpTENKd1lYbHNiMkZrSWpvaVpYbEtRVmt5T1hWa1IxWTBaRU5KTmtsdGFEQmtTRUo2VDJrNGRtUjZUbkJhUXpWMlkyMWpkbU15Vm1wa1dFcHdaRWhyZG1ScVNXbE1RMHAzWkZkS2MyRlhUa3hhV0d0cFQyeDBOMGx0Ykd0SmFtOXBTVE5DZVdGWE1XaGpibXRwVEVOS01XTXlSbTVhVTBrMlNXNU9jRm95TlhCaWJXTnBURU5LTUdWWVFteEphbTlwVlRKV2FtTkVTVEZPYlhONFZtMVdlV0ZYV25CWk1rWXdZVmM1ZFZNeVZqVk5ha0Y0VDBOSmMwbHVRakZaYlhod1dUQjBiR1ZWYUd4bFEwazJTV3BCZVZwRVRtaE5NazV0VGxkVmVscHFXbXhPUkVGNlRWZEdhMDFIU21sT1ZGWm9XbGROTWs1WFdtbE5NbGt3VFZkTk5GcEVaekpQVkd0NVRsZFNhVTE2UlRWUFZGRTBUbGROTVUxRVp6Tlpla1YzVFVkVk1GbDVTamxNU0hOcFlWZFJhVTlwU1dwamJWWnFZak5hYkdOdWEybE1RMG94WXpKR2JscFRTVFpKYmtwc1dUSTVNbHBZU2pWSmFYZHBaRWhzZDFwVFNUWkpiRTVzV1ROQmVVNVVXbkpOVmxwc1kyMXNiV0ZYVG1oa1IyeDJZbXQwYkdWVVNYZE5WR2RwVEVOS2QyUlhTbk5oVjA1TVdsaHNTVnBZWjJsUGFVbDNUV3ByTUUxdFJtbE9hbXQzV1ZkSk1FNVVUWGhQVjFWNVRXcFNhVTlVUm0xT2FrcG9UVmROTUZwVVNUTk5SMWt6VGtkU2JFOVVTWHBQVkZFMVdrZEZkMXBVVFhsYWJWcHFXVmRGTkU1SFVYaGFhbVJzVFZkSmFXWldNSE5KYlVZeFpFZG9iR0p1VW5CWk1rWXdZVmM1ZFVscWNHSkphVTUzWTIxc2RGbFlTalZKYkRCelNXMUdlbU15Vm5sa1IyeDJZbXN4YkdSSGFIWmFRMGsyVjNsSmFtTklTbkJpVjBaNVpWTktaR1pSSWl3aWMybG5ibUYwZFhKbElqb2lVa2xQV21vdFNFZHpOVkY1VjJKZmFEQnhXRkJ6VHpSb1ZrTkRhRGxPVHpkVU1tMWxWekUwUVhsWVJrRjBWRXhHY3pWQlQwVlNTelJNZVZWaE5XRm1TSGhyT1dWRlV6ZFZUbTlUZWxGd1dHVlVWMjlpYm5jaWZRI3ByaW1hcnkifQ.afc3c2da8e1f6f573979b02445084f6b8974c0d7d27619eef1ef77c12522029155abb5daffd9fb5b35719ef2f3e84b57384e89aadb2faaf57125113a2a0d6b47");
      if (globalToken) {
        setCredentialShareResponseToken(prevState => [...prevState, globalToken]);
      }
    }, [globalToken]);

    const onClickValidate = async (token: string) => {
      const result = await sdk!.verifyCredentialShareResponseToken(token);
      const currentVCState = vcData
      const newVCState = currentVCState.map((data:any) => {
        if (data.token === token) {
          data.validatedResult = result
        }
        return data
      })
      setVCData(newVCState)
    }

    useEffect(() => {
      const onValidate = async (token: string) => {
        const result = await sdk!.verifyCredentialShareResponseToken(token);
        const credentialType = result.suppliedCredentials[0].type[(result.suppliedCredentials[0].type.length)-1]
        let drivingClass: string | undefined = undefined
        if (credentialType === 'IDDocumentCredentialPersonV1') {
          drivingClass = JSON.parse(result.suppliedCredentials[0].credentialSubject.data.hasIDDocument?.hasIDDocument.idClass).drivingClass;
        }

        setVCData(prevState => [...prevState, {token, validatedResult: result}])
      }
      if (credentialShareResponseToken) {
        credentialShareResponseToken.map((token: string) => {
          // Check if the vcData already has the token = means it was validated before
          const existingData = vcData.filter(data => data.token == token)
          if (existingData.length == 0){
            return onValidate(token);
          }
        })
      }
    }, [credentialShareResponseToken, sdk])

    return <div>
        <Table bordered>
              <thead className="thead-light">
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Validated</th>
                  { <th>Action</th> }
                </tr>
              </thead>
              <tbody>
                {vcData.map((data, index) => {
                  console.log(vcData);
                  return (
                    <tr>
                    <th scope="row">{index+1}</th>
                    <td>{data.validatedResult.suppliedCredentials[0].credentialSubject.data.givenName}</td>
                    <td>{data.validatedResult.isValid ? <img src={CheckCircle} alt='check' style={{height: '28px'}} /> : 
                        <img src={CrossCircle} alt='cross' style={{height: '28px'}} />
                    }
                    </td>
                    { <td><Button onClick={() => onClickValidate(data.token)}>Validate</Button></td> }
                  </tr>
                  )
                })}
              </tbody>
            </Table>
    </div>
}
export default CredentialTable;